import {
  customElement,
  Enlightenment,
  html,
  property,
} from "@toolbarthomas/enlightenment";

@customElement("hello-world")
class HelloWorld extends Enlightenment {
  protected render(): unknown {
    return html`<span>Hello World</span>`;
  }
}
