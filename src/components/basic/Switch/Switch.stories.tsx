// utils
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

// components
import Switch from "./index";

const meta: ComponentMeta<typeof Switch> = {
  title: "Basic/Switch",
  component: Switch,
};
export default meta;

export const Default: ComponentStoryObj<typeof Switch> = {
  args: {
    value: true,
  },
};
