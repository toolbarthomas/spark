import {
  customElement,
  Enlightenment,
  html,
  property,
} from "@toolbarthomas/enlightenment";

import style from "./style.scss";

@customElement("hello-world")
class HelloWorld extends Enlightenment {
  static styles = [style];

  protected render(): unknown {
    return html`<span>Hello World</span>`;
  }
}
