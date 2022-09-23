// utils
import { FunctionComponent, useState } from "react";

// components
import Button from "@/components/basic/Button";
import Switch from "@/components/basic/Switch";
import Tabs from "@/components/basic/Tabs";
import Fab from "./components/basic/Fab";

// icons
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const App: FunctionComponent = () => {
  const [switchOn, setSwitchOn] = useState(true);
  const tabs = [
    { title: "Tab 1", id: "1" },
    { title: "Tab 2", id: "2" },
    { title: "Tab 3", id: "3" },
  ];
  const [activeTabId, setActiveTabId] = useState("1");
  const [activeTabId2, setActiveTabId2] = useState("");

  return (
    <div className="app">
      Button
      <Button m={16}>Button</Button>
      Button [ variant: "primary" ]
      <Button variant="primary" m={16}>
        Button
      </Button>
      Button [ variant: "primary", size: "large" ]
      <Button variant="primary" size="large" m={16}>
        Button
      </Button>
      Switch
      <Switch m={16} value={switchOn} onChange={setSwitchOn} />
      Tabs
      <Tabs
        tabs={tabs}
        activeTabId={activeTabId}
        onChange={setActiveTabId}
        m={16}
      />
      Tabs [ optional: true ]
      <Tabs
        tabs={tabs}
        activeTabId={activeTabId2}
        onChange={setActiveTabId2}
        optional
        m={16}
      />
      Fab [ variant: "primary", icon: "faPlus" ]
      <Fab variant="primary" icon={faPlus} m={16} />
    </div>
  );
};

export default App;
