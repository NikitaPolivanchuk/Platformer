import type Ecs from '../ecs';
import type CameraComponent from '../components/CameraComponent.ts';
import type TransformComponent from '../components/TransformComponent.ts';
import type SpriteComponent from '../components/SpriteComponent.ts';
import type AnimatedSpriteComponent from '../components/AnimatedSpriteComponent.ts';
import type { AnimationControllerComponent } from '../components/AnimationControllerComponent.ts';

const renderSystem = (ecs: Ecs, ctx: CanvasRenderingContext2D, dt: number) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  const cameraEntities = ecs.entitiesWith('camera');
  const cam = cameraEntities.length
    ? ecs.getComponent<CameraComponent>(cameraEntities[0], 'camera')!
    : { position: { x: 0, y: 0 }, zoom: 1 };

  ctx.save();
  ctx.scale(cam.zoom, cam.zoom);

  for (const id of ecs.entitiesWith('transform', 'sprite')) {
    const t = ecs.getComponent<TransformComponent>(id, 'transform')!;
    const s = ecs.getComponent<SpriteComponent>(id, 'sprite')!;

    ctx.drawImage(
      s.image,
      s.frameX * s.size.width,
      0,
      s.size.width,
      s.size.height,
      t.position.x - cam.position.x,
      t.position.y - cam.position.y,
      s.size.width,
      s.size.height,
    );
  }

  for (const id of ecs.entitiesWith('transform', 'animatedSprite')) {
    const t = ecs.getComponent<TransformComponent>(id, 'transform')!;
    const sprite = ecs.getComponent<AnimatedSpriteComponent>(id, 'animatedSprite')!;

    const controller = ecs.getComponent<AnimationControllerComponent>(id, 'animationController');
    if (controller) {
      const desiredAnim = controller.getAnimation(ecs, id);
      if (desiredAnim !== sprite.currentAnimation) {
        sprite.currentAnimation = desiredAnim;
        sprite.currentFrame = 0;
        sprite.elapsedTime = 0;
      }
    }

    if (t.velocity.x < -0.01) {
      sprite.flipX = true;
    } else if (t.velocity.x > 0.01) {
      sprite.flipX = false;
    }

    const anim = sprite.animations[sprite.currentAnimation];
    if (!anim) continue;

    sprite.elapsedTime += dt;

    if (sprite.elapsedTime >= anim.frameTime) {
      sprite.elapsedTime -= anim.frameTime;
      sprite.currentFrame += 1;

      if (sprite.currentFrame >= anim.frameCount) {
        if (sprite.loop) {
          sprite.currentFrame = 0;
        } else {
          sprite.currentFrame = anim.frameCount - 1;
        }
      }
    }

    const sx = sprite.currentFrame * sprite.size.width;
    const sy = anim.frameY * sprite.size.height;

    ctx.save();

    if (sprite.flipX) {
      ctx.translate(t.position.x - cam.position.x + sprite.size.width / 2, 0);
      ctx.scale(-1, 1);
      ctx.translate(-(t.position.x - cam.position.x + sprite.size.width / 2), 0);
    }

    ctx.drawImage(
      sprite.image,
      sx,
      sy,
      sprite.size.width,
      sprite.size.height,
      t.position.x - cam.position.x,
      t.position.y - cam.position.y,
      sprite.size.width,
      sprite.size.height,
    );

    ctx.restore();
  }

  ctx.restore();
};

export default renderSystem;
