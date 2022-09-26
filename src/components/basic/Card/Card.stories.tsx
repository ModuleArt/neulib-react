// utils
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

// components
import Card from "./index";

const meta: ComponentMeta<typeof Card> = {
  title: "Basic/Card",
  component: Card,
};
export default meta;

export const Default: ComponentStoryObj<typeof Card> = {
  args: {
    children: "Card",
    variant: "default",
  },
};
