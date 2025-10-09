import type Ecs from '../ecs';
import type TransformComponent from '../components/TransformComponent.ts';
import type PathComponent from '../components/PathComponent.ts';

const pathSystem = (ecs: Ecs) => {
  for (const e of ecs.entitiesWith('transform', 'pathMovement')) {
    const transform = ecs.getComponent<TransformComponent>(e, 'transform')!;
    const path = ecs.getComponent<PathComponent>(e, 'pathMovement')!;

    const target = path.points[path.currentIndex];
    const dx = target.x - transform.position.x;
    const dy = target.y - transform.position.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 1) {
      path.currentIndex += path.direction;

      if (path.currentIndex >= path.points.length || path.currentIndex < 0) {
        if (path.loop) {
          path.currentIndex = 0;
        } else {
          path.direction *= -1;
          path.currentIndex += path.direction;
        }
      }
      continue;
    }

    transform.velocity.x = (dx / dist) * path.speed;
    transform.velocity.y = (dy / dist) * path.speed;
  }
};

export default pathSystem;
