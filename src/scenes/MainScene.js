// import { GameObject } from '@elements/GameObject';
import { DisplayScene } from 'phina.js/build/phina.esm';
import { $safe } from '@extensions/Utils';
import { Player } from '@elements/Player';

/**
 * メインシーン
 * @export
 * @class MainScene
 * @extends {DisplayScene}
 */
export class MainScene extends DisplayScene {

  /**
   * Creates an instance of MainScene.
   * @param {*} options
   * @memberof MainScene
   */
  constructor(options) {
    options = $safe.call({}, options, { backgroundColor: 'black' });
    super(options);
    console.log("init mainscene");

    this.player = new Player()
      .setPosition(100, 100)
      .addChildTo(this);
  }

  /**
   * @param {*} app
   * @memberof MainScene
   */
  update(app) {
  }

}
