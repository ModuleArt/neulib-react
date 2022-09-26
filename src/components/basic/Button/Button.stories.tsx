// utils
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

// components
import Button from "./index";

const meta: ComponentMeta<typeof Button> = {
  title: "Basic/Button",
  component: Button,
};
export default meta;

export const Default: ComponentStoryObj<typeof Button> = {
  args: {
    children: "Button",
    variant: "default",
    size: "default",
  },
};

export const Primary: ComponentStoryObj<typeof Button> = {
  args: {
    children: "Primary Button",
    variant: "primary",
    size: "default",
  },
};

export const Large: ComponentStoryObj<typeof Button> = {
  args: {
    children: "Large Button",
    variant: "primary",
    size: "large",
  },
};
