// utils
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

// components
import Fab from "./index";

// icons
import { faBars } from "@fortawesome/free-solid-svg-icons";

const meta: ComponentMeta<typeof Fab> = {
  title: "Atoms/Fab",
  component: Fab,
};
export default meta;

export const Default: ComponentStoryObj<typeof Fab> = {
  args: {
    variant: "default",
    icon: { icon: faBars },
    iconColor: "default",
  },
};

export const Primary: ComponentStoryObj<typeof Fab> = {
  args: {
    variant: "primary",
    icon: { icon: faBars },
    iconColor: "default",
  },
};
