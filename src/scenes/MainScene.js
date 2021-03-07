import { GameObject } from "@elements/GameObject";
import { Collision, DisplayElement, DisplayScene, Label, Sprite } from "phina.js/build/phina.esm";
import { $safe, randint } from "@extensions/Utils";

export class MainScene extends DisplayScene {

  constructor(options) {
    options = $safe.call({}, options, { backgroundColor: 'black' });
    super(options);
  }

  update(app) {
  }

}
