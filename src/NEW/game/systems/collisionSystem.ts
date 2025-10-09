import type Ecs from '../ecs';
import type TransformComponent from '../components/TransformComponent.ts';
import type ColliderComponent from '../components/ColliderComponent.ts';
import type RigidBodyComponent from '../components/RigidBodyComponent.ts';
import { intersects } from '../utils.ts';
import type ControlComponent from '../components/ControlComponent.ts';

export const collisionSystem = (ecs: Ecs) => {
  const entities = ecs.entitiesWith('transform', 'collider');

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

      if (!intersects(eTransform.position, eCollider.size, oTransform.position, oCollider.size)) {
        continue;
      }

      const eCanMove = eRigid ? eRigid.type === 'dynamic' : false;
      const oCanMove = oRigid ? oRigid.type === 'dynamic' : false;

      const overlapX =
        eTransform.position.x < oTransform.position.x
          ? eTransform.position.x + eCollider.size.width - oTransform.position.x
          : oTransform.position.x + oCollider.size.width - eTransform.position.x;

      const overlapY =
        eTransform.position.y < oTransform.position.y
          ? eTransform.position.y + eCollider.size.height - oTransform.position.y
          : oTransform.position.y + oCollider.size.height - eTransform.position.y;

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

      if (Math.abs(overlapX) < Math.abs(overlapY)) {
        if (eCanMove) {
          eTransform.position.x -= overlapX;
          eTransform.velocity.x = 0;
        } else if (oCanMove) {
          oTransform.position.x += overlapX;
          oTransform.velocity.x = 0;
        }
      } else {
        if (eCanMove) {
          eTransform.position.y -= overlapY;
          eTransform.velocity.y = 0;
          if (eRigid && overlapY > 0) {
            eRigid.groundedOn = o;
          }
        } else if (oCanMove) {
          oTransform.position.y += overlapY;
          oTransform.velocity.y = 0;
          if (oRigid && overlapY < 0) {
            oRigid.groundedOn = e;
          }
        }
      }
    }
  }
};

export default collisionSystem;
