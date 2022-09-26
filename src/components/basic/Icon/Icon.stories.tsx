// utils
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

// components
import Icon from "./index";

// icons
import { faStar } from "@fortawesome/free-solid-svg-icons";

const meta: ComponentMeta<typeof Icon> = {
  title: "Basic/Icon",
  component: Icon,
};
export default meta;

export const Default: ComponentStoryObj<typeof Icon> = {
  args: {
    icon: faStar,
  },
};
