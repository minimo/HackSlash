import { DisplayElement, Sprite, Vector2 } from "phina.js/build/phina.esm";

/**
 * ゲーム内オブジェクト管理用基底クラス
 *
 * @export
 * @class GameObject
 * @extends {DisplayElement}
 */
export class GameObject extends DisplayElement {
 
  constructor(options) {
    super(options);
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
    this.gravity = new Vector2(0, 0);

    /**
     * オブジェクトの経過フレーム数
     * @type {boolean}
     * @memberof GameObject
     */
    this.time = 0;

    this.on('enterframe', () => {
      this.position.add();
      this.time++;
    });
  }

}
