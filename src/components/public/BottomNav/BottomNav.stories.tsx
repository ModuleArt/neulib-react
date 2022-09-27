// utils
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

// components
import BottomNav from "./index";
import Fab from "@/components/public/Fab";

// icons
import {
  faPlus,
  faArrowsTurnToDots,
  faWallet,
  faListUl,
  faMagnifyingGlass,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

const meta: ComponentMeta<typeof BottomNav> = {
  title: "Complex/BottomNav",
  component: BottomNav,
};
export default meta;

export const Default: ComponentStoryObj<typeof BottomNav> = {
  args: {
    leftButtons: [
      {
        id: "1",
        icon: { icon: faArrowsTurnToDots },
      },
      {
        id: "2",
        icon: { icon: faWallet },
      },
      {
        id: "3",
        icon: { icon: faPlusCircle },
      },
      {
        id: "4",
        icon: { icon: faListUl },
      },
      {
        id: "5",
        icon: { icon: faMagnifyingGlass },
      },
    ],
    activeButtonId: "1",
  },
};

export const WithChildren: ComponentStoryObj<typeof BottomNav> = {
  args: {
    leftButtons: [
      {
        id: "1",
        icon: { icon: faArrowsTurnToDots },
      },
      {
        id: "2",
        icon: { icon: faWallet },
      },
    ],
    children: <Fab variant="primary" icon={{ icon: faPlus }} />,
    rightButtons: [
      {
        id: "3",
        icon: { icon: faListUl },
      },
      {
        id: "4",
        icon: { icon: faMagnifyingGlass },
      },
    ],
    activeButtonId: "1",
  },
};
