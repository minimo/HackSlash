import { LoadingScene, ManagerScene } from 'phina.js/build/phina.esm';
import { AssetCatalog } from '../assets/AssetCatalog';
import { MainScene } from './MainScene';
import { TitleScene } from './TitleScene';

/**
 * シーンフロー制御クラス
 *
 * @export
 * @class SceneFlow
 * @extends {ManagerScene}
 */
export class SceneFlow extends ManagerScene {
  /**
   * Creates an instance of SceneFlow.
   * @memberof SceneFlow
   */
  constructor() {
    super({
      startLabel: 'loading',
      scenes: [{
        label: 'loading',
        className: LoadingScene,
        nextLabel: 'title',
        arguments: {
          assets: AssetCatalog,
        },
      },{
        label: 'title',
        className: TitleScene,
        nextLabel: 'main',
        arguments: {
          title: 'Hack and Slash'
        },
      },{
        label: 'main',
        className: MainScene,
        nextLabel: 'title',
      }],
    });
  }
}
