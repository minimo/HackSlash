import { GameObject } from "@elements/GameObject";
import { Collision, DisplayElement, DisplayScene, Label, Sprite } from "phina.js/build/phina.esm";
import { $safe, randint } from "@extensions/Utils";

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
  }

  /**
   * @param {*} app
   * @memberof MainScene
   */
  update(app) {
  }

}
