import Entity from '../wrappers/Entity';
import type { Vector } from '../types.ts';
import type { FC } from 'react';
import Collider from '../wrappers/Collider.tsx';
import Sprite from '../wrappers/Sprite.tsx';
import VerticalSpikeSheet from '@assets/spike.png';

interface VerticalSpikeProps {
  position: Vector;
  type: number;
}

const Spike: FC<VerticalSpikeProps> = ({ position, type }) => {
  return (
    <Entity position={position}>
      <Sprite src={VerticalSpikeSheet} size={{ width: 64, height: 64 }} type={type} />
      <Collider size={{ width: 64, height: 64 }} onTrigger={() => {}} />
    </Entity>
  );
};

export default Spike;
