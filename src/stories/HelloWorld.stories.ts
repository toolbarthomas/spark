import type { StoryObj, Meta } from "@storybook/html";
import { fn } from "@storybook/test";
import type { ButtonProps } from "./Button";
import { createButton } from "./Button";

import { render } from "../utils/render";

const meta = {
  title: "Example/Hello World",
  tags: ["autodocs"],
  render: (args) => render("/dist/HelloWorld/index.js", "hello-world", args),
  // argTypes: {
  //   backgroundColor: {customElement control: "color" },
  //   label: { control: "text" },
  //   onClick: { action: "onClick" },
  //   primary: { control: "boolean" },
  //   size: {
  //     control: { type: "select" },
  //     options: ["small", "medium", "large"],
  //   },
  // },
  // // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    primary: true,
    label: "Button",
  },
};
