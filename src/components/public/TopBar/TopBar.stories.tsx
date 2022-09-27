// utils
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

// components
import TopBar from "./index";
import Fab from "@/components/public/Fab";

// icons
import { faBars } from "@fortawesome/free-solid-svg-icons";

const meta: ComponentMeta<typeof TopBar> = {
  title: "Complex/TopBar",
  component: TopBar,
};
export default meta;

export const Default: ComponentStoryObj<typeof TopBar> = {
  args: {
    title: "Title",
    subtitle: "Subtitle",
    textAlign: "left",
    leftElement: (
      <Fab
        icon={{
          icon: "https://cdn140.picsart.com/26310888-8bb9-4817-9815-f9c2dbbb509a/378333362007203.jpg?type=webp&to=crop&r=256",
          p: { pa: 0 },
        }}
        variant="nobg"
        m={{ mr: 4 }}
      />
    ),
    rightElement: (
      <Fab
        icon={{
          icon: faBars,
        }}
        variant="nobg"
      />
    ),
    card: { p: { py: 8, px: 12 } },
  },
};
