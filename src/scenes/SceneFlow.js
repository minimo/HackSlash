import { LoadingScene, ManagerScene } from "phina.js/build/phina.esm";
import { AssetCatalog } from "../assets/AssetCatalog";
import { TitleScene } from "./TitleScene";
import { MainScene } from "./MainScene";

export class SceneFlow extends ManagerScene {
  constructor() {
    super({
      startLabel: "loading",
      scenes: [{
        label: "loading",
        className: LoadingScene,
        nextLabel: "title",
        arguments: {
          assets: AssetCatalog,
        },
      },{
        label: "title",
        className: TitleScene,
        nextLabel: "main",
        arguments: {
          title: "Hack and Slash"
        },
      },{
        label: "main",
        className: MainScene,
        nextLabel: "title",
      }],
    });
  }
}
