// utils
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { useArgs } from "@storybook/client-api";

// components
import Tabs from "./index";

const meta: ComponentMeta<typeof Tabs> = {
  title: "Basic/Tabs",
  component: Tabs,
};
export default meta;

export const Default: ComponentStoryObj<typeof Tabs> = {
  args: {
    tabs: [
      { title: "Tab 1", id: "1" },
      { title: "Tab 2", id: "2" },
      { title: "Tab 3", id: "3" },
    ],
    activeTabId: "1",
    optional: false,
  },
};

export const Playground = () => {
  const [{ activeTabId }, updateArgs] = useArgs();

  return (
    <Tabs
      tabs={[
        { title: "Tab 1", id: "1" },
        { title: "Tab 2", id: "2" },
        { title: "Tab 3", id: "3" },
      ]}
      activeTabId={activeTabId}
      onChange={(tabId) => updateArgs({ activeTabId: tabId })}
    />
  );
};
