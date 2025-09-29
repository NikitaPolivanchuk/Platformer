import SmoothWall from './SmoothWall';
import Player from './Player';
import Coin from './Coin';
import Platform from './Platform';
import HorizontalSpike from './HorizontalSpike';
import Skull from './Skull';
import Sign from './Sign';
import Gib from './Gib';
import StickedGib from './StickedGib';
import VerticalSpike from './VerticalSpike';

export const levels = {
  1: (
    <>
      <Player position={{ x: 100, y: 100 }} />

      <SmoothWall position={{ x: 64, y: 200 }} type={0} />
      <SmoothWall position={{ x: 128, y: 200 }} type={1} />
      <SmoothWall position={{ x: 192, y: 200 }} type={2} />
      <SmoothWall position={{ x: 64, y: 264 }} type={6} />
      <SmoothWall position={{ x: 128, y: 264 }} type={7} />
      <SmoothWall position={{ x: 192, y: 264 }} type={8} />

      <Coin position={{ x: 150, y: 170 }} />
      <Coin position={{ x: 180, y: 170 }} />
      <Coin position={{ x: 210, y: 170 }} />

      <Platform position={{ x: 256, y: 200 }} type={0} />
      <Platform position={{ x: 304, y: 200 }} type={1} />
      <Platform position={{ x: 256, y: 280 }} type={0} />
      <Platform position={{ x: 304, y: 280 }} type={1} />
      <Platform position={{ x: 352, y: 280 }} type={2} />

      <HorizontalSpike position={{ x: 400, y: 200 }} type={0} />
      <HorizontalSpike position={{ x: 460, y: 200 }} type={1} />

      <VerticalSpike position={{ x: 540, y: 200 }} type={0} />
      <VerticalSpike position={{ x: 540, y: 260 }} type={1} />

      <Skull position={{ x: 600, y: 200 }} />

      <Sign position={{ x: 600, y: 300 }} type={0} />

      <Gib position={{ x: 700, y: 300 }} type={0} />

      <StickedGib position={{ x: 700, y: 450 }} type={0} />
      <StickedGib position={{ x: 750, y: 450 }} type={1} />
    </>
  ),
  2: (
    <>
      <Player position={{ x: 50, y: 50 }} />

      <Coin position={{ x: 100, y: 100 }} />
      <Coin position={{ x: 200, y: 200 }} />

      <Platform position={{ x: 50, y: 200 }} type={1} />
      <Platform position={{ x: 98, y: 200 }} type={2} />

      <Skull position={{ x: 300, y: 150 }} />
    </>
  ),
};
