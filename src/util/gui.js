// https://github.com/dataarts/dat.gui/issues/142
import { GUI } from "dat.gui/build/dat.gui";
import { DEV_GUI } from "./constants";

class Folder {
  add = () => this;

  listen = () => this;

  name = () => this;

  open = () => this;

  close = () => this;

  onChange = () => this;

  addFolder = () => this;

  addColor = () => this;

  removeFolder = () => this;

  remove = () => this;

  step = () => this;

}

class GUIWrapper {
  add = () => this;

  addFolder = () => new Folder();

  removeFolder = () => this;

  addColor = () => this;

  listen = () => this;

  name = () => this;

  close = () => this;

  step = () => this;

  onChange = () => this;

  setValue = () => this;

  remove = () => this;

  open = () => this;

}

let Cls = GUI;

if (!DEV_GUI) {
  Cls = GUIWrapper;
}

export const gui = new Cls();
export const guiStats = gui.addFolder("stats");
export const guiHelpers = gui.addFolder("helpers");

export { GUIWrapper };

gui.open();
// GUI.toggleHide();
