import type Ecs from '../ecs';
import type TransformComponent from '../components/TransformComponent.ts';
import type ColliderComponent from '../components/ColliderComponent.ts';
import type RigidBodyComponent from '../components/RigidBodyComponent.ts';
import { intersects } from '../utils.ts';
import type ControlComponent from '../components/ControlComponent.ts';

const prevTriggers = new Map<symbol, Set<symbol>>();

export const collisionSystem = (ecs: Ecs) => {
  const entities = ecs.entitiesWith('transform', 'collider');
  const currentTriggers = new Map<symbol, Set<symbol>>();
  const EPS = 0.0001;

  const recordTrigger = (a: symbol, b: symbol) => {
    if (!currentTriggers.has(a)) currentTriggers.set(a, new Set());
    currentTriggers.get(a)!.add(b);
  };

  for (const e of entities) {
    const eTransform = ecs.getComponent<TransformComponent>(e, 'transform')!;
    const eCollider = ecs.getComponent<ColliderComponent>(e, 'collider')!;
    const eRigid = ecs.getComponent<RigidBodyComponent>(e, 'rigidbody');
    const eControl = ecs.getComponent<ControlComponent>(e, 'control');
    if (!eRigid || eRigid.type !== 'dynamic') continue;

    for (const o of entities) {
      if (e === o) continue;

      const oTransform = ecs.getComponent<TransformComponent>(o, 'transform')!;
      const oCollider = ecs.getComponent<ColliderComponent>(o, 'collider')!;
      // const oRigid = ecs.getComponent<RigidBodyComponent>(o, 'rigidbody');
      const oControl = ecs.getComponent<ControlComponent>(o, 'control');

      const isTriggerPair = eCollider.onTrigger || oCollider.onTrigger;
      if (isTriggerPair) {
        if (intersects(eTransform.position, eCollider.size, oTransform.position, oCollider.size)) {
          if (eCollider.onTrigger) recordTrigger(e, o);
          if (oCollider.onTrigger) recordTrigger(o, e);
        }
        continue;
      }

      if (!intersects(eTransform.position, eCollider.size, oTransform.position, oCollider.size)) {
        continue;
      }

      const platform = eCollider.oneWay ? e : oCollider.oneWay ? o : null;
      if (platform) {
        const isEPlatform = platform === e;
        const platformTransform = isEPlatform ? eTransform : oTransform;
        const actorTransform = isEPlatform ? oTransform : eTransform;
        const actorCollider = isEPlatform ? oCollider : eCollider;
        const actorControl = isEPlatform ? oControl : eControl;

        const platformTop = platformTransform.position.y;
        const actorBottom = actorTransform.position.y + actorCollider.size.height;
        const isAbove = actorBottom - actorTransform.velocity.y <= platformTop;
        const isFalling = actorTransform.velocity.y > 0;
        const isDropping = actorControl?.drop;

        if (!isAbove || !isFalling || isDropping) {
          continue;
        }
      }

      const eTop = eTransform.position.y;
      const eBottom = eTop + eCollider.size.height;
      const oTop = oTransform.position.y;
      const oBottom = oTop + oCollider.size.height;

      const verticalOverlap = Math.min(eBottom, oBottom) - Math.max(eTop, oTop);
      if (verticalOverlap < eCollider.size.height * 0.1) continue;

      const leftOverlap = eTransform.position.x + eCollider.size.width - oTransform.position.x;
      const rightOverlap = oTransform.position.x + oCollider.size.width - eTransform.position.x;

      if (leftOverlap > EPS && leftOverlap < rightOverlap) {
        eTransform.position.x -= leftOverlap;
        eTransform.velocity.x = 0;
      } else if (rightOverlap > EPS && rightOverlap < leftOverlap) {
        eTransform.position.x += rightOverlap;
        eTransform.velocity.x = 0;
      }
    }
  }

  for (const e of entities) {
    const eTransform = ecs.getComponent<TransformComponent>(e, 'transform')!;
    const eCollider = ecs.getComponent<ColliderComponent>(e, 'collider')!;
    const eRigid = ecs.getComponent<RigidBodyComponent>(e, 'rigidbody');
    const eControl = ecs.getComponent<ControlComponent>(e, 'control');
    if (eRigid) eRigid.groundedOn = null;
    if (!eRigid || eRigid.type !== 'dynamic') continue;

    for (const o of entities) {
      if (e === o) continue;

      const oTransform = ecs.getComponent<TransformComponent>(o, 'transform')!;
      const oCollider = ecs.getComponent<ColliderComponent>(o, 'collider')!;
      const oControl = ecs.getComponent<ControlComponent>(o, 'control');

      const isTriggerPair = eCollider.onTrigger || oCollider.onTrigger;
      if (isTriggerPair) {
        if (intersects(eTransform.position, eCollider.size, oTransform.position, oCollider.size)) {
          if (eCollider.onTrigger) recordTrigger(e, o);
          if (oCollider.onTrigger) recordTrigger(o, e);
        }
        continue;
      }

      if (!intersects(eTransform.position, eCollider.size, oTransform.position, oCollider.size))
        continue;

      const platform = eCollider.oneWay ? e : oCollider.oneWay ? o : null;
      if (platform) {
        const isEPlatform = platform === e;
        const platformTransform = isEPlatform ? eTransform : oTransform;
        const actorTransform = isEPlatform ? oTransform : eTransform;
        const actorCollider = isEPlatform ? oCollider : eCollider;
        const actorControl = isEPlatform ? oControl : eControl;

        const platformTop = platformTransform.position.y;
        const actorBottom = actorTransform.position.y + actorCollider.size.height;
        const isAbove = actorBottom - actorTransform.velocity.y <= platformTop;
        const isFalling = actorTransform.velocity.y > 0;
        const isDropping = actorControl?.drop;

        if (!isAbove || !isFalling || isDropping) {
          continue;
        }
      }

      const eLeft = eTransform.position.x;
      const eRight = eLeft + eCollider.size.width;
      const oLeft = oTransform.position.x;
      const oRight = oLeft + oCollider.size.width;
      const horizontalOverlap = Math.min(eRight, oRight) - Math.max(eLeft, oLeft);
      if (horizontalOverlap < eCollider.size.width * 0.1) continue;

      const topOverlap = eTransform.position.y + eCollider.size.height - oTransform.position.y;
      const bottomOverlap = oTransform.position.y + oCollider.size.height - eTransform.position.y;

      if (topOverlap > EPS && topOverlap < bottomOverlap) {
        eTransform.position.y -= topOverlap;
        eTransform.velocity.y = 0;
        if (eRigid && topOverlap > 0) eRigid.groundedOn = o;
      } else if (bottomOverlap > EPS && bottomOverlap < topOverlap) {
        eTransform.position.y += bottomOverlap;
        eTransform.velocity.y = 0;
      }
    }
  }

  for (const [entity, collider] of ecs.componentsOfType<ColliderComponent>('collider')) {
    if (!collider.onTrigger) continue;
    const prev = prevTriggers.get(entity) || new Set();
    const curr = currentTriggers.get(entity) || new Set();

    for (const other of curr) {
      if (!prev.has(other)) {
        collider.onTrigger(entity, other, 'enter');
      } else {
        collider.onTrigger(entity, other, 'stay');
      }
    }

    for (const other of prev) {
      if (!curr.has(other)) {
        collider.onTrigger(entity, other, 'exit');
      }
    }
  }

  prevTriggers.clear();
  for (const [e, others] of currentTriggers) {
    prevTriggers.set(e, new Set(others));
  }
};

export default collisionSystem;
