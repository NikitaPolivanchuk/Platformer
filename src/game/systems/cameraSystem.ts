import type Ecs from '../ecs';
import type CameraComponent from '../components/CameraComponent.ts';
import type TransformComponent from '../components/TransformComponent.ts';

const cameraSystem = (ecs: Ecs, ctx: CanvasRenderingContext2D) => {
  const cameras = ecs.entitiesWith('camera');

  for (const camId of cameras) {
    const cam = ecs.getComponent<CameraComponent>(camId, 'camera')!;
    if (!cam.target) {
      continue;
    }

    const targetTransform = ecs.getComponent<TransformComponent>(cam.target, 'transform');
    if (!targetTransform) {
      continue;
    }

    const targetPos = {
      x: targetTransform.position.x - ctx.canvas.width / (2 * cam.zoom) + cam.offset.x,
      y: targetTransform.position.y - ctx.canvas.height / (2 * cam.zoom) + cam.offset.y,
    };

    cam.position.x += (targetPos.x - cam.position.x) * cam.lerp;
    cam.position.y += (targetPos.y - cam.position.y) * cam.lerp;

    if (cam.bounds) {
      const { minX, maxX, minY, maxY, left, right, top, bottom } = cam.bounds;

      if (left !== false && minX !== undefined) cam.position.x = Math.max(minX, cam.position.x);
      if (right !== false && maxX !== undefined) cam.position.x = Math.min(maxX, cam.position.x);

      if (top !== false && minY !== undefined) cam.position.y = Math.max(minY, cam.position.y);
      if (bottom !== false && maxY !== undefined) cam.position.y = Math.min(maxY, cam.position.y);
    }
  }
};

export default cameraSystem;
