import { phina, CanvasApp, DisplayScene } from 'phina.js/build/phina.esm';
import { SceneFlow } from '@scenes/SceneFlow';
import { SystemConfig } from './Config';

console.log('Version: 0.0.001 (Date 2021-03-05, Commit #)');

if (process.env.NODE_ENV !== 'production') {
  console.log('##### Development mode #####');
}

const screenWidth = SystemConfig.screen.width;
const screenHeight = SystemConfig.screen.height;

DisplayScene.defaults.width = screenWidth;
DisplayScene.defaults.height = screenHeight;

phina.main(()=> {
  const appOption = {
    width: screenWidth,
    height: screenHeight,
    fps: 60,
  };
  const app = new CanvasApp(appOption);
  app.replaceScene(new SceneFlow());
  app.run();
});
