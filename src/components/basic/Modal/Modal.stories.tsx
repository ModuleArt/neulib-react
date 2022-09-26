// utils
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

// components
import Modal from "./index";
import Fab from "@/components/basic/Fab";

// icons
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const meta: ComponentMeta<typeof Modal> = {
  title: "Portals/Modal",
  component: Modal,
};
export default meta;

export const Default: ComponentStoryObj<typeof Modal> = {
  args: {
    children: "Modal Body",
    show: true,
    header: {
      title: "Modal Title",
      card: { p: { py: 8, px: 12 } },
      rightElement: <Fab icon={{ icon: faXmark }} iconColor="secondary" />,
    },
  },
};
