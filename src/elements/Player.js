import { DisplayElement, Sprite, Vector2 } from "phina.js/build/phina.esm";
import { GameObject } from "./GameObject";

/**
 * プレイヤークラス
 * @export
 * @class Player
 * @extends {GameObject}
 */
export class Player extends GameObject{
  /**
   * Creates an instance of Player.
   * @memberof Player
   */
  constructor() {
    super({
      sprite: new Sprite("actor4", 32, 32),
      animation: {
        interval: 3,
        frame: {
          "idle": [0, 1, 2, 3],
        }
      },
    });
  }

  updateFrame(app) {

  }
}
