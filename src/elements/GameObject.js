import { DisplayElement } from 'phina.js/build/phina.esm';
import { GameConfig } from '../Config';
import { $safe } from '@extensions/Utils';

/**
 * ゲーム内オブジェクト管理用基底クラス
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
    options = $safe.call({}, options, GameObject.defaulOptions);
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

    if (this.sprite) {
      this.sprite.addChildTo(this);
    }

    this.on('enterframe', app => {
      this.beforeUpdateFrame(app);
      if (this.isGravity) {
        this.position.add(this.gravity);
      }
      this.updateFrame(app);
      this.afterUpdateFrame(app);
      this.time++;
    });

  }

  /**
   * フレーム毎前処理
   * @param {*} app
   * @memberof GameObject
   */
  beforeUpdateFrame(app) {}

  /**
   * フレーム毎処理
   * @param {*} app
   * @memberof GameObject
   */
  updateFrame(app) {}

  /**
   * フレーム後処理
   * @param {*} app
   * @memberof GameObject
   */
  afterUpdateFrame(app) {}
}
