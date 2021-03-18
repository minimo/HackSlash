import { Animation } from "./Animation";

/**
 * アニメーション管理クラス
 * @export
 * @class AnimationSet
 * @extends {GameObject}
 */
export class AnimationSet {
  /**
   * Creates an instance of AnimationSet.
   * @memberof AnimationSet
   */ 
  constructor() {
    this._animations = [];
  }

  addAnimation(animation) {
    if (!animation || !(animation instanceof Animation)) return;
    this._animations.push(animation);
  }

}
