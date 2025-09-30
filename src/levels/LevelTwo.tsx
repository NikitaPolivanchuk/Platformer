import type { FC } from 'react';
import Sign from '../entities/Sign';
import Gib from '../entities/Gib';
import StickedGib from '../entities/StickedGib';
import Wall from '../entities/Wall';
import SmoothWall from '../entities/SmoothWall';
import HorizontalSpike from '../entities/HorizontalSpike';
import Platform from '../entities/Platform';
import Coin from '../entities/Coin';
import Skull from '../entities/Skull';
import Player from '../entities/Player';
import FakeSmoothWall from '../entities/FakeSmoothWall';
import FakeWall from '../entities/FakeWall';
import Void from '../entities/Void';

const LevelTwo: FC = () => (
  <>
    <Sign position={{ x: 400, y: 536 }} type={3} />

    <Gib position={{ x: 100, y: 560 }} type={1} />
    <Gib position={{ x: 1120, y: 624 }} type={0} />

    <StickedGib position={{ x: 1005, y: 270 }} type={1} />
    <StickedGib position={{ x: 80, y: 72 }} type={0} />

    <Wall position={{ x: 0, y: 576 }} type={5} />
    <Wall position={{ x: 64, y: 576 }} type={5} />
    <Wall position={{ x: 128, y: 576 }} type={6} />
    <Wall position={{ x: 0, y: 640 }} type={8} />
    <Wall position={{ x: 64, y: 640 }} type={8} />
    <Wall position={{ x: 128, y: 640 }} type={9} />
    <Wall position={{ x: 0, y: 704 }} type={8} />
    <Wall position={{ x: 64, y: 704 }} type={8} />
    <Wall position={{ x: 128, y: 704 }} type={8} />
    <SmoothWall position={{ x: 192, y: 704 }} type={5} />
    <SmoothWall position={{ x: 256, y: 704 }} type={5} />
    <Wall position={{ x: 320, y: 704 }} type={8} />
    <Wall position={{ x: 320, y: 640 }} type={7} />
    <Wall position={{ x: 320, y: 576 }} type={4} />
    <Wall position={{ x: 384, y: 576 }} type={6} />
    <Wall position={{ x: 384, y: 640 }} type={9} />
    <Wall position={{ x: 384, y: 704 }} type={9} />
    <Wall position={{ x: 640, y: 384 }} type={4} />
    <Wall position={{ x: 640, y: 448 }} type={7} />
    <Wall position={{ x: 640, y: 512 }} type={7} />
    <Wall position={{ x: 640, y: 576 }} type={7} />
    <Wall position={{ x: 640, y: 640 }} type={7} />
    <Wall position={{ x: 640, y: 704 }} type={7} />
    <Wall position={{ x: 704, y: 448 }} type={9} />
    <Wall position={{ x: 704, y: 512 }} type={9} />
    <Wall position={{ x: 704, y: 576 }} type={9} />
    <Wall position={{ x: 704, y: 640 }} type={9} />
    <Wall position={{ x: 704, y: 704 }} type={9} />
    <Wall position={{ x: 704, y: 384 }} type={5} />
    <Wall position={{ x: 768, y: 384 }} type={2} />
    <Wall position={{ x: 832, y: 384 }} type={2} />
    <Wall position={{ x: 896, y: 384 }} type={2} />
    <Wall position={{ x: 960, y: 384 }} type={2} />
    <Wall position={{ x: 1024, y: 384 }} type={3} />
    <Wall position={{ x: 768, y: 192 }} type={4} />
    <Wall position={{ x: 832, y: 192 }} type={3} />
    <Wall position={{ x: 780, y: 256 }} type={3} />
    <Wall position={{ x: 768, y: 256 }} type={10} />
    <SmoothWall position={{ x: 384, y: 0 }} type={9} />
    <SmoothWall position={{ x: 384, y: 64 }} type={9} />
    <SmoothWall position={{ x: 384, y: 128 }} type={9} />
    <SmoothWall position={{ x: 384, y: 256 }} type={9} />
    <SmoothWall position={{ x: 384, y: 320 }} type={9} />
    <SmoothWall position={{ x: 0, y: 384 }} type={11} />
    <SmoothWall position={{ x: 64, y: 384 }} type={11} />
    <SmoothWall position={{ x: 128, y: 384 }} type={11} />
    <SmoothWall position={{ x: 192, y: 384 }} type={11} />
    <SmoothWall position={{ x: 256, y: 384 }} type={11} />
    <SmoothWall position={{ x: 320, y: 384 }} type={11} />
    <SmoothWall position={{ x: 384, y: 384 }} type={12} />
    <SmoothWall position={{ x: 0, y: 0 }} type={8} />
    <Wall position={{ x: 64, y: 0 }} type={11} />
    <SmoothWall position={{ x: 128, y: 0 }} type={8} />
    <SmoothWall position={{ x: 192, y: 0 }} type={8} />
    <SmoothWall position={{ x: 256, y: 0 }} type={8} />
    <SmoothWall position={{ x: 320, y: 0 }} type={8} />
    <Wall position={{ x: 0, y: 64 }} type={9} />
    <Wall position={{ x: 128, y: 64 }} type={10} />
    <Wall position={{ x: 192, y: 64 }} type={11} />
    <Wall position={{ x: 256, y: 64 }} type={11} />
    <SmoothWall position={{ x: 320, y: 64 }} type={8} />
    <Wall position={{ x: 0, y: 128 }} type={9} />
    <Wall position={{ x: 320, y: 128 }} type={7} />
    <SmoothWall position={{ x: 0, y: 192 }} type={8} />
    <Wall position={{ x: 64, y: 192 }} type={5} />
    <Wall position={{ x: 128, y: 192 }} type={3} />
    <SmoothWall position={{ x: 0, y: 256 }} type={8} />
    <Wall position={{ x: 64, y: 256 }} type={9} />
    <Wall position={{ x: 256, y: 256 }} type={4} />
    <SmoothWall position={{ x: 320, y: 256 }} type={8} />
    <SmoothWall position={{ x: 0, y: 320 }} type={8} />
    <SmoothWall position={{ x: 64, y: 320 }} type={8} />
    <SmoothWall position={{ x: 128, y: 320 }} type={5} />
    <SmoothWall position={{ x: 192, y: 320 }} type={5} />
    <SmoothWall position={{ x: 256, y: 320 }} type={8} />
    <SmoothWall position={{ x: 320, y: 320 }} type={8} />
    <Wall position={{ x: 1088, y: 640 }} type={4} />
    <Wall position={{ x: 1152, y: 640 }} type={5} />
    <Wall position={{ x: 1088, y: 704 }} type={7} />
    <Wall position={{ x: 1152, y: 704 }} type={8} />
    <SmoothWall position={{ x: 896, y: 576 }} type={0} />
    <Wall position={{ x: -64, y: 448 }} type={0} />
    <Wall position={{ x: -64, y: 512 }} type={0} />
    <Wall position={{ x: 1216, y: 0 }} type={0} />
    <Wall position={{ x: 1216, y: 64 }} type={0} />
    <Wall position={{ x: 1216, y: 128 }} type={0} />
    <Wall position={{ x: 1216, y: 192 }} type={0} />
    <Wall position={{ x: 1216, y: 256 }} type={0} />
    <Wall position={{ x: 1216, y: 320 }} type={0} />
    <Wall position={{ x: 1216, y: 448 }} type={0} />
    <Wall position={{ x: 1216, y: 512 }} type={0} />
    <Wall position={{ x: 1216, y: 576 }} type={0} />

    <HorizontalSpike position={{ x: 0, y: 448 }} type={0} />
    <HorizontalSpike position={{ x: 64, y: 448 }} type={0} />
    <HorizontalSpike position={{ x: 128, y: 448 }} type={0} />
    <HorizontalSpike position={{ x: 192, y: 448 }} type={0} />
    <HorizontalSpike position={{ x: 256, y: 448 }} type={0} />
    <HorizontalSpike position={{ x: 320, y: 448 }} type={0} />
    <HorizontalSpike position={{ x: 192, y: 668 }} type={1} />
    <HorizontalSpike position={{ x: 256, y: 668 }} type={1} />
    <HorizontalSpike position={{ x: 960, y: 348 }} type={1} />
    <HorizontalSpike position={{ x: 1024, y: 348 }} type={1} />
    <HorizontalSpike position={{ x: 896, y: 540 }} type={1} />

    <Platform position={{ x: 192, y: 576 }} type={0} />
    <Platform position={{ x: 256, y: 576 }} type={2} />
    <Platform position={{ x: 576, y: 640 }} type={2} />
    <Platform position={{ x: 512, y: 512 }} type={1} />
    <Platform position={{ x: 576, y: 512 }} type={2} />
    <Platform position={{ x: 448, y: 384 }} type={0} />
    <Platform position={{ x: 512, y: 384 }} type={1} />
    <Platform position={{ x: 576, y: 384 }} type={2} />
    <Platform position={{ x: 704, y: 256 }} type={2} />
    <Platform position={{ x: 896, y: 704 }} type={1} />
    <Platform position={{ x: 960, y: 704 }} type={1} />
    <Platform position={{ x: 1024, y: 704 }} type={2} />

    <Coin position={{ x: 224, y: 540 }} />
    <Coin position={{ x: 270, y: 540 }} />
    <Coin position={{ x: 600, y: 600 }} />
    <Coin position={{ x: 950, y: 270 }} />
    <Coin position={{ x: 1020, y: 230 }} />
    <Coin position={{ x: 1090, y: 260 }} />
    <Coin position={{ x: 885, y: 490 }} />
    <Coin position={{ x: 955, y: 490 }} />
    <Coin position={{ x: 150, y: 150 }} />
    <Coin position={{ x: 500, y: 100 }} />
    <Coin position={{ x: 560, y: 70 }} />
    <Coin position={{ x: 640, y: 70 }} />
    <Coin position={{ x: 700, y: 100 }} />

    <Skull position={{ x: 815, y: 700 }} />

    <Player position={{ x: 20, y: 530 }} />

    <FakeSmoothWall position={{ x: 384, y: 192 }} type={9} />

    <FakeWall position={{ x: 320, y: 192 }} type={7} />

    <Void position={{ x: 448, y: 832 }} size={{ width: 640, height: 50 }} />
  </>
);

export default LevelTwo;
