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

    cam.position.x += (targetPos.x - cam.position.x) * (cam.lerp ?? 1);
    cam.position.y += (targetPos.y - cam.position.y) * (cam.lerp ?? 1);

    if (cam.bounds) {
      cam.position.x = Math.max(cam.bounds.minX, Math.min(cam.position.x, cam.bounds.maxX));
      cam.position.y = Math.max(cam.bounds.minY, Math.min(cam.position.y, cam.bounds.maxY));
    }
  }
};

export default cameraSystem;
