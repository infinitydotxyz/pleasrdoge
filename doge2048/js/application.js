import dogeDerp from '../img/212/doge-derp-212.gif';
import dogeFat from '../img/212/doge-fat-212.gif';
import dogeGradient from '../img/212/doge-gradient-212.gif';
import dogeHat from '../img/212/doge-hat-212.gif';
import dogePeepers from '../img/212/doge-peepers-212.gif';
import dogePrizza from '../img/212/doge-prizza-212.gif';
import dogeRainbow from '../img/212/doge-rainbow-212.gif';
import dogeShakeSpace from '../img/212/doge-shake-space-212.gif';
import dogeSunglasses from '../img/212/doge-sunglasses-212.gif';
import dogeShake from '../img/212/doge-shake-212.gif';
import dogeWink from '../img/212/doge-wink-212.gif';

import dogeDerp2 from '../img/114/doge-derp-114.gif';
import dogeFat2 from '../img/114/doge-fat-114.gif';
import dogeGradient2 from '../img/114/doge-gradient-114.gif';
import dogeHat2 from '../img/114/doge-hat-114.gif';
import dogePeepers2 from '../img/114/doge-peepers-114.gif';
import dogePrizza2 from '../img/114/doge-prizza-114.gif';
import dogeRainbow2 from '../img/114/doge-rainbow-114.gif';
import dogeShakeSpace2 from '../img/114/doge-shake-space-114.gif';
import dogeSunglasses2 from '../img/114/doge-sunglasses-114.gif';
import dogeShake2 from '../img/114/doge-shake-114.gif';
import dogeWink2 from '../img/114/doge-wink-114.gif';

import { GameManager } from './game_manager';
import { KeyboardInputManager } from './keyboard_input_manager';
import { HTMLActuator } from './html_actuator';
import { LocalScoreManager } from './local_score_manager';

// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});

const imageList = [
  dogeDerp,
  dogeFat,
  dogeGradient,
  dogeHat,
  dogePeepers,
  dogePrizza,
  dogeRainbow,
  dogeShakeSpace,
  dogeSunglasses,
  dogeShake,
  dogeWink,

  dogeDerp2,
  dogeFat2,
  dogeGradient2,
  dogeHat2,
  dogePeepers2,
  dogePrizza2,
  dogeRainbow2,
  dogeShakeSpace2,
  dogeSunglasses2,
  dogeShake2,
  dogeWink2,
];
for (let i = 0; i < imageList.length; i++) {
  const imageObject = new Image();
  imageObject.src = imageList[i];
}
