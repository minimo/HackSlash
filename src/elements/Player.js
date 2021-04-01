import { Sprite } from "phina.js/build/phina.esm";
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
      animations: {
        "idle": {
          frequency: 3,
          frames: [0, 1, 2, 3],
          next: "idle",
        },
      },
    });
  }

  updateFrame(app) {

  }
}
