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

  for (const e of entities) {
    const eTransform = ecs.getComponent<TransformComponent>(e, 'transform')!;
    const eCollider = ecs.getComponent<ColliderComponent>(e, 'collider')!;
    const eRigid = ecs.getComponent<RigidBodyComponent>(e, 'rigidbody');
    const eControl = ecs.getComponent<ControlComponent>(e, 'control');

    if (eRigid) {
      eRigid.groundedOn = null;
    }

    for (const o of entities) {
      if (e === o) {
        continue;
      }

      const oTransform = ecs.getComponent<TransformComponent>(o, 'transform')!;
      const oCollider = ecs.getComponent<ColliderComponent>(o, 'collider')!;
      const oRigid = ecs.getComponent<RigidBodyComponent>(o, 'rigidbody');
      const oControl = ecs.getComponent<ControlComponent>(o, 'control');

      const isOverlapping = intersects(
        eTransform.position,
        eCollider.size,
        oTransform.position,
        oCollider.size,
      );

      if (isOverlapping) {
        if (eCollider.onTrigger || oCollider.onTrigger) {
          if (!currentTriggers.has(e)) currentTriggers.set(e, new Set());
          currentTriggers.get(e)!.add(o);

          if (!currentTriggers.has(o)) currentTriggers.set(o, new Set());
          currentTriggers.get(o)!.add(e);
        }
      }

      const eIsTrigger = !!eCollider.onTrigger;
      const oIsTrigger = !!oCollider.onTrigger;
      if (!isOverlapping || eIsTrigger || oIsTrigger) continue;

      const eCanMove = eRigid?.type === 'dynamic';
      const oCanMove = oRigid?.type === 'dynamic';

      const leftOverlap = eTransform.position.x + eCollider.size.width - oTransform.position.x;
      const rightOverlap = oTransform.position.x + oCollider.size.width - eTransform.position.x;
      const topOverlap = eTransform.position.y + eCollider.size.height - oTransform.position.y;
      const bottomOverlap = oTransform.position.y + oCollider.size.height - eTransform.position.y;

      const overlaps = [
        { side: 'left', value: leftOverlap },
        { side: 'right', value: rightOverlap },
        { side: 'top', value: topOverlap },
        { side: 'bottom', value: bottomOverlap },
      ];

      const collision = overlaps.filter((o) => o.value > 0).sort((a, b) => a.value - b.value)[0];

      if (!collision) continue;

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

      switch (collision.side) {
        case 'left':
          if (eCanMove) {
            eTransform.position.x -= collision.value;
            eTransform.velocity.x = 0;
          } else if (oCanMove) {
            oTransform.position.x += collision.value;
            oTransform.velocity.x = 0;
          }
          break;

        case 'right':
          if (eCanMove) {
            eTransform.position.x += collision.value;
            eTransform.velocity.x = 0;
          } else if (oCanMove) {
            oTransform.position.x -= collision.value;
            oTransform.velocity.x = 0;
          }
          break;

        case 'top':
          if (eCanMove) {
            eTransform.position.y -= collision.value;
            eTransform.velocity.y = 0;
            if (eRigid && collision.value > 0) {
              eRigid.groundedOn = o;
            }
          } else if (oCanMove) {
            oTransform.position.y += collision.value;
            oTransform.velocity.y = 0;
            if (oRigid && collision.value > 0) {
              oRigid.groundedOn = e;
            }
          }
          break;

        case 'bottom':
          if (eCanMove) {
            eTransform.position.y += collision.value;
            eTransform.velocity.y = 0;
          } else if (oCanMove) {
            oTransform.position.y -= collision.value;
            oTransform.velocity.y = 0;
          }
          break;
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
