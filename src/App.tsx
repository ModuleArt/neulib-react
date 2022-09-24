// utils
import { FunctionComponent, useState } from "react";

// components
import Button from "@/components/basic/Button";
import Switch from "@/components/basic/Switch";
import Tabs from "@/components/basic/Tabs";
import Fab from "./components/basic/Fab";
import BottomNav from "./components/mobile/BottomNav";

// icons
import {
  faPlus,
  faArrowsTurnToDots,
  faWallet,
  faListUl,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const App: FunctionComponent = () => {
  const [switchOn, setSwitchOn] = useState(true);
  const tabs = [
    { title: "Tab 1", id: "1" },
    { title: "Tab 2", id: "2" },
    { title: "Tab 3", id: "3" },
  ];
  const [activeTabId, setActiveTabId] = useState("1");
  const [activeTabId2, setActiveTabId2] = useState("");
  const [navButtons1] = useState([
    {
      id: "1",
      icon: faArrowsTurnToDots,
    },
    {
      id: "2",
      icon: faWallet,
    },
  ]);
  const [navButtons2] = useState([
    {
      id: "3",
      icon: faListUl,
    },
    {
      id: "4",
      icon: faMagnifyingGlass,
    },
  ]);
  const [activeNavButtonId, setActiveNavButtonId] = useState("1");

  return (
    <div className="app">
      {"basic/Button"}
      <Button m={{ mt: 16, mb: 48 }}>Button</Button>
      {"basic/Button { variant: 'primary' }"}
      <Button variant="primary" m={{ mt: 16, mb: 48 }}>
        Button
      </Button>
      {"basic/Button { variant: 'primary', size: 'large' }"}
      <Button variant="primary" size="large" m={{ mt: 16, mb: 48 }}>
        Button
      </Button>
      {"basic/Switch"}
      <Switch m={{ mt: 16, mb: 48 }} value={switchOn} onChange={setSwitchOn} />
      {"basic/Tabs"}
      <Tabs
        tabs={tabs}
        activeTabId={activeTabId}
        onChange={setActiveTabId}
        m={{ mt: 16, mb: 48 }}
      />
      {"basic/Tabs { optional: true }"}
      <Tabs
        tabs={tabs}
        activeTabId={activeTabId2}
        onChange={setActiveTabId2}
        optional
        m={{ mt: 16, mb: 48 }}
      />
      {"basic/Fab { variant: 'primary', icon: 'faPlus' }"}
      <Fab variant="primary" icon={faListUl} m={{ mt: 16, mb: 48 }} />
      {"mobile/BottomNav { children: Fab }"}
      <BottomNav
        leftButtons={navButtons1}
        rightButtons={navButtons2}
        activeButtonId={activeNavButtonId}
        onButtonClick={setActiveNavButtonId}
        m={{ mt: 16, mb: 48 }}
      >
        <Fab variant="primary" icon={faPlus} />
      </BottomNav>
    </div>
  );
};

export default App;
