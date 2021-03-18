/**
 * アニメーション管理クラス
 * @export
 * @class Animation
 * @extends {GameObject}
 */
export class Animation {
  /**
   * Creates an instance of Animation.
   * @memberof Animation
   */ 
  constructor(name, frameArray) {
    this.name = name;
    this.frameArray = frameArray.splice();
  }
}
