import type Ecs from '../ecs';
import type TransformComponent from '../components/TransformComponent.ts';
import type RigidBodyComponent from '../components/RigidBodyComponent.ts';
import type ColliderComponent from '../components/ColliderComponent.ts';
import { aabbIntersect } from '../utils.ts';

const collisionSystem = (ecs: Ecs) => {
  const moving = ecs.entitiesWith('transform', 'rigidbody', 'collider');
  const blocks = ecs.entitiesWith('transform', 'collider');

  for (const e of moving) {
    const transform = ecs.getComponent<TransformComponent>(e, 'transform')!;
    const rigid = ecs.getComponent<RigidBodyComponent>(e, 'rigidbody')!;
    const col = ecs.getComponent<ColliderComponent>(e, 'collider')!;
    rigid.grounded = false;

    let ax = transform.position.x;
    let ay = transform.position.y;
    const aw = col.size.width;
    const ah = col.size.height;

    for (const block of blocks) {
      if (block === e) continue;

      const bt = ecs.getComponent<TransformComponent>(block, 'transform')!;
      const bc = ecs.getComponent<ColliderComponent>(block, 'collider')!;

      const bx = bt.position.x;
      const by = bt.position.y;
      const bw = bc.size.width;
      const bh = bc.size.height;

      if (!aabbIntersect(ax, ay, aw, ah, bx, by, bw, bh)) {
        continue;
      }

      const overlapX = Math.min(ax + aw, bx + bw) - Math.max(ax, bx);
      const overlapY = Math.min(ay + ah, by + bh) - Math.max(ay, by);

      if (Math.abs(overlapX) < Math.abs(overlapY)) {
        if (ax + aw / 2 < bx + bw / 2) {
          transform.position.x -= overlapX;
        } else {
          transform.position.x += overlapX;
        }
        rigid.velocity.x = 0;
      } else {
        if (ay + ah / 2 < by + bh / 2) {
          transform.position.y -= overlapY;
          rigid.grounded = true;
        } else {
          transform.position.y += overlapY;
        }
        rigid.velocity.y = 0;
      }

      ax = transform.position.x;
      ay = transform.position.y;
    }
  }
};

export default collisionSystem;
