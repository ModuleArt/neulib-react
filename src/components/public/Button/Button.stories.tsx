// utils
import type { Story } from "@ladle/react";

// components
import Button from "./index";

// props
import { IButton } from "./props";

export default {
  title: "Atoms/Button",
  component: Button,
};

export const Default: Story<IButton> = (args) => <Button {...args}>Button</Button>;

Default.argTypes = {
  variant: {
    options: ["default", "primary"],
    control: { type: "radio" },
    defaultValue: "default",
  },
  size: {
    options: ["default", "large"],
    control: { type: "radio" },
    defaultValue: "default",
  },
};
