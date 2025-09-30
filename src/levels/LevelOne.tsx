import type { FC } from 'react';
import Wall from '../entities/Wall';
import SmoothWall from '../entities/SmoothWall';
import HorizontalSpike from '../entities/HorizontalSpike';
import Player from '../entities/Player';
import Skull from '../entities/Skull';
import Coin from '../entities/Coin';
import VerticalSpike from '../entities/VerticalSpike';
import Gib from '../entities/Gib';
import StickedGib from '../entities/StickedGib';
import Sign from '../entities/Sign';
import Void from '../entities/Void';

const LevelOne: FC = () => (
  <>
    <Sign position={{ x: 200, y: 540 }} type={3} />

    <Gib position={{ x: 1100, y: 115 }} type={1} />

    <StickedGib position={{ x: 500, y: 392 }} type={0} />

    <Wall position={{ x: 0, y: 0 }} type={8} />
    <Wall position={{ x: 0, y: 64 }} type={8} />
    <Wall position={{ x: 0, y: 128 }} type={8} />
    <Wall position={{ x: 0, y: 192 }} type={8} />
    <Wall position={{ x: 0, y: 256 }} type={9} />
    <Wall position={{ x: 0, y: 320 }} type={9} />
    <Wall position={{ x: 0, y: 384 }} type={9} />
    <Wall position={{ x: 0, y: 448 }} type={9} />
    <Wall position={{ x: 0, y: 512 }} type={9} />
    <Wall position={{ x: 0, y: 576 }} type={8} />
    <Wall position={{ x: 0, y: 640 }} type={8} />
    <Wall position={{ x: 0, y: 704 }} type={8} />
    <Wall position={{ x: 64, y: 576 }} type={5} />
    <Wall position={{ x: 64, y: 640 }} type={8} />
    <Wall position={{ x: 64, y: 704 }} type={8} />
    <Wall position={{ x: 128, y: 576 }} type={5} />
    <Wall position={{ x: 128, y: 640 }} type={8} />
    <Wall position={{ x: 128, y: 704 }} type={8} />
    <Wall position={{ x: 192, y: 576 }} type={6} />
    <Wall position={{ x: 192, y: 640 }} type={8} />
    <Wall position={{ x: 192, y: 704 }} type={8} />
    <SmoothWall position={{ x: 256, y: 640 }} type={5} />
    <SmoothWall position={{ x: 256, y: 704 }} type={8} />
    <SmoothWall position={{ x: 320, y: 640 }} type={5} />
    <SmoothWall position={{ x: 320, y: 704 }} type={8} />
    <Wall position={{ x: 384, y: 452 }} type={0} />
    <Wall position={{ x: 384, y: 512 }} type={7} />
    <Wall position={{ x: 384, y: 576 }} type={7} />
    <Wall position={{ x: 384, y: 640 }} type={8} />
    <Wall position={{ x: 384, y: 704 }} type={8} />
    <SmoothWall position={{ x: 448, y: 512 }} type={5} />
    <SmoothWall position={{ x: 448, y: 576 }} type={8} />
    <SmoothWall position={{ x: 448, y: 640 }} type={8} />
    <SmoothWall position={{ x: 448, y: 704 }} type={8} />
    <SmoothWall position={{ x: 512, y: 512 }} type={5} />
    <SmoothWall position={{ x: 512, y: 576 }} type={8} />
    <SmoothWall position={{ x: 512, y: 640 }} type={8} />
    <SmoothWall position={{ x: 512, y: 704 }} type={8} />
    <Wall position={{ x: 576, y: 330 }} type={4} />
    <Wall position={{ x: 576, y: 384 }} type={7} />
    <Wall position={{ x: 576, y: 448 }} type={7} />
    <Wall position={{ x: 576, y: 512 }} type={8} />
    <Wall position={{ x: 576, y: 576 }} type={8} />
    <Wall position={{ x: 576, y: 640 }} type={8} />
    <Wall position={{ x: 576, y: 704 }} type={8} />
    <Wall position={{ x: 640, y: 330 }} type={6} />
    <Wall position={{ x: 640, y: 384 }} type={9} />
    <Wall position={{ x: 640, y: 448 }} type={8} />
    <Wall position={{ x: 640, y: 512 }} type={8} />
    <Wall position={{ x: 640, y: 576 }} type={8} />
    <Wall position={{ x: 640, y: 640 }} type={8} />
    <Wall position={{ x: 640, y: 704 }} type={8} />
    <SmoothWall position={{ x: 704, y: 448 }} type={6} />
    <SmoothWall position={{ x: 704, y: 512 }} type={9} />
    <SmoothWall position={{ x: 704, y: 576 }} type={9} />
    <SmoothWall position={{ x: 704, y: 640 }} type={8} />
    <SmoothWall position={{ x: 704, y: 704 }} type={8} />
    <SmoothWall position={{ x: 768, y: 640 }} type={6} />
    <SmoothWall position={{ x: 768, y: 704 }} type={9} />
    <Wall position={{ x: 64, y: 0 }} type={8} />
    <Wall position={{ x: 64, y: 64 }} type={8} />
    <Wall position={{ x: 64, y: 128 }} type={8} />
    <Wall position={{ x: 64, y: 192 }} type={11} />
    <Wall position={{ x: 128, y: 0 }} type={8} />
    <Wall position={{ x: 128, y: 64 }} type={8} />
    <Wall position={{ x: 128, y: 128 }} type={8} />
    <Wall position={{ x: 128, y: 192 }} type={11} />
    <Wall position={{ x: 192, y: 0 }} type={8} />
    <Wall position={{ x: 192, y: 64 }} type={8} />
    <Wall position={{ x: 192, y: 128 }} type={8} />
    <Wall position={{ x: 192, y: 192 }} type={11} />
    <Wall position={{ x: 256, y: 0 }} type={8} />
    <Wall position={{ x: 256, y: 64 }} type={9} />
    <Wall position={{ x: 256, y: 128 }} type={9} />
    <Wall position={{ x: 256, y: 192 }} type={12} />
    <Wall position={{ x: 320, y: 0 }} type={11} />
    <Wall position={{ x: 384, y: 0 }} type={11} />
    <Wall position={{ x: 448, y: 0 }} type={8} />
    <Wall position={{ x: 448, y: 64 }} type={7} />
    <Wall position={{ x: 448, y: 128 }} type={10} />
    <Wall position={{ x: 512, y: 0 }} type={8} />
    <Wall position={{ x: 512, y: 64 }} type={8} />
    <Wall position={{ x: 512, y: 128 }} type={12} />
    <Wall position={{ x: 576, y: 0 }} type={8} />
    <Wall position={{ x: 576, y: 64 }} type={11} />
    <Wall position={{ x: 640, y: 0 }} type={8} />
    <Wall position={{ x: 640, y: 64 }} type={11} />
    <Wall position={{ x: 704, y: 0 }} type={8} />
    <Wall position={{ x: 704, y: 64 }} type={12} />
    <Wall position={{ x: 768, y: 0 }} type={11} />
    <Wall position={{ x: 832, y: 0 }} type={11} />
    <Wall position={{ x: 832, y: 0 }} type={11} />
    <Wall position={{ x: 896, y: 0 }} type={11} />
    <Wall position={{ x: 960, y: 0 }} type={11} />
    <Wall position={{ x: 1024, y: 0 }} type={11} />
    <Wall position={{ x: 1024, y: 0 }} type={11} />
    <Wall position={{ x: 1088, y: 0 }} type={11} />
    <Wall position={{ x: 1152, y: 0 }} type={8} />
    <Wall position={{ x: 1152, y: 64 }} type={7} />
    <Wall position={{ x: 1152, y: 128 }} type={8} />
    <Wall position={{ x: 1152, y: 192 }} type={8} />
    <Wall position={{ x: 1152, y: 256 }} type={8} />
    <Wall position={{ x: 1152, y: 320 }} type={8} />
    <Wall position={{ x: 1152, y: 384 }} type={8} />
    <Wall position={{ x: 1152, y: 448 }} type={8} />
    <Wall position={{ x: 1152, y: 512 }} type={8} />
    <Wall position={{ x: 1152, y: 576 }} type={10} />
    <Wall position={{ x: 1088, y: 128 }} type={4} />
    <Wall position={{ x: 1088, y: 192 }} type={7} />
    <Wall position={{ x: 1088, y: 256 }} type={8} />
    <Wall position={{ x: 1088, y: 320 }} type={8} />
    <Wall position={{ x: 1088, y: 384 }} type={8} />
    <Wall position={{ x: 1088, y: 448 }} type={7} />
    <Wall position={{ x: 1088, y: 512 }} type={10} />
    <Wall position={{ x: 1024, y: 256 }} type={5} />
    <Wall position={{ x: 1024, y: 320 }} type={8} />
    <Wall position={{ x: 1024, y: 384 }} type={10} />
    <Wall position={{ x: 960, y: 256 }} type={4} />
    <Wall position={{ x: 960, y: 320 }} type={10} />

    <HorizontalSpike position={{ x: 256, y: 604 }} type={1} />
    <HorizontalSpike position={{ x: 320, y: 604 }} type={1} />
    <HorizontalSpike position={{ x: 448, y: 476 }} type={1} />
    <HorizontalSpike position={{ x: 512, y: 476 }} type={1} />
    <HorizontalSpike position={{ x: 704, y: 412 }} type={1} />
    <HorizontalSpike position={{ x: 768, y: 604 }} type={1} />

    <VerticalSpike position={{ x: 1052, y: 448 }} type={0} />
    <VerticalSpike position={{ x: 1052, y: 512 }} type={0} />

    <Coin position={{ x: 405, y: 410 }} />
    <Coin position={{ x: 605, y: 290 }} />
    <Coin position={{ x: 655, y: 290 }} />

    <Skull position={{ x: 1010, y: 200 }} />

    <Player position={{ x: 100, y: 500 }} />

    <Void position={{ x: 832, y: 832 }} size={{ width: 400, height: 50 }} />
  </>
);

export default LevelOne;
