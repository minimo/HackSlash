import { Vector2 } from "phina.js/build/phina.esm"
/**
 * システム設定
 * @type {*}
 */
export const SystemConfig = {
  /**
   * スクリーン設定
   * @type {Object}
   */
  screen: {
    /**
     * スクリーンの横幅
     * @type {Number}
     */
    width: 960,

    /**
     * スクリーンの縦幅
     * @type {Number}
     */
    height: 640
  }
}

/** 
 * ゲーム内情報設定
 * @type {*}
 **/
export const GameConfig = {
  /** 
   * ワールド設定
   * @type {Object} */
  world: {
    /** 
     * 重力係数
     * @type {Number} */
    gravity: new Vector2(0, 4.9),
  }
}