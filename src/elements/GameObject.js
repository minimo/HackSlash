import { DisplayElement, Sprite, Vector2 } from "phina.js/build/phina.esm";
import { GameConfig } from "../Config";

/**
 * ゲーム内オブジェクト管理用基底クラス
 *
 * @export
 * @class GameObject
 * @extends {DisplayElement}
 */
export class GameObject extends DisplayElement {
 
  /**
   * Creates an instance of GameObject.
   * @param {*} options
   * @memberof GameObject
   */
  constructor(options) {
    options = (options || {});
    super(options);

    /**
     * 表示スプライト
     * @type {Sprite}
     * @memberof GameObject
     */
    this.sprite = options.sprite || null;

    /**
     * 重力有効フラグ
     * @type {boolean}
     * @memberof GameObject
     */
    this.isGravity = false;
    /**
     * 重力
     * @type {Vector2}
     * @memberof GameObject
     */
    this.gravity = GameConfig.world.gravity;

    /**
     * オブジェクトの経過フレーム数
     * @type {boolean}
     * @memberof GameObject
     */
    this.time = 0;

    this.on('enterframe', () => {
      if (this.isGravity) {
        this.position.add(this.gravity);
      }
      this.time++;
    });
  }

}
