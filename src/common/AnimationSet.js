import { Accessory } from 'phina.js/build/phina.esm';
import { Animation } from "./Animation";

/**
 * アニメーション管理クラス
 * @export
 * @class AnimationSet
 * @extends {GameObject}
 */
export class AnimationSet extends Accessory {
  /**
   * Creates an instance of AnimationSet.
   * @memberof AnimationSet
   */ 
  constructor() {
    super();
    this._animations = [];
  }

  addAnimation(animation) {
    if (!animation || !(animation instanceof Animation)) return;
    this._animations.push(animation);
  }

}
