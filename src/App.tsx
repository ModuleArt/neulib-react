// utils
import { FunctionComponent, useState } from "react";

// components
import Icon from "@/components/basic/Icon";
import Button from "@/components/basic/Button";
import Switch from "@/components/basic/Switch";
import Tabs from "@/components/basic/Tabs";
import Fab from "@/components/basic/Fab";
import BottomNav from "@/components/mobile/BottomNav";
import TopBar from "@/components/basic/TopBar";
import Modal from "@/components/basic/Modal";

// icons
import {
  faPlus,
  faArrowsTurnToDots,
  faWallet,
  faListUl,
  faMagnifyingGlass,
  faSackDollar,
  faXmark,
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
      icon: { icon: faArrowsTurnToDots },
    },
    {
      id: "2",
      icon: { icon: faWallet },
    },
  ]);
  const [navButtons2] = useState([
    {
      id: "3",
      icon: { icon: faListUl },
    },
    {
      id: "4",
      icon: { icon: faMagnifyingGlass },
    },
  ]);
  const [activeNavButtonId, setActiveNavButtonId] = useState("1");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app">
      Icon
      <Icon icon={faWallet} m={{ mt: 16, mb: 48 }} />
      Button
      <Button m={{ mt: 16 }}>Button</Button>
      <Button variant="primary" m={{ mt: 16 }}>
        Button
      </Button>
      <Button variant="primary" size="large" m={{ mt: 16, mb: 48 }}>
        Button
      </Button>
      Switch
      <Switch m={{ mt: 16, mb: 48 }} value={switchOn} onChange={setSwitchOn} />
      Tabs
      <Tabs
        tabs={tabs}
        activeTabId={activeTabId}
        onChange={setActiveTabId}
        m={{ mt: 16 }}
      />
      <Tabs
        tabs={tabs}
        activeTabId={activeTabId2}
        onChange={setActiveTabId2}
        optional
        m={{ mt: 16, mb: 48 }}
      />
      Fab
      <Fab icon={{ icon: faListUl }} m={{ mt: 16 }} />
      <Fab icon={{ icon: faListUl }} variant="primary" m={{ mt: 16 }} />
      <Fab
        icon={{ icon: faListUl }}
        variant="nobg"
        iconColor="secondary"
        m={{ mt: 16, mb: 48 }}
      />
      BottomNav
      <BottomNav
        leftButtons={navButtons1}
        rightButtons={navButtons2}
        activeButtonId={activeNavButtonId}
        onButtonClick={setActiveNavButtonId}
        m={{ mt: 16, mb: 48 }}
      >
        <Fab variant="primary" icon={{ icon: faPlus }} />
      </BottomNav>
      TopBar
      <TopBar
        title="Title"
        subtitle="Subtitle"
        leftElement={
          <Fab
            icon={{
              icon: "https://cdn140.picsart.com/26310888-8bb9-4817-9815-f9c2dbbb509a/378333362007203.jpg?type=webp&to=crop&r=256",
              p: 0,
            }}
            variant="nobg"
          />
        }
        rightElement={
          <Fab
            icon={{ icon: faSackDollar }}
            iconColor="secondary"
            variant="nobg"
          />
        }
        card={{ p: { py: 8, px: 12 }, m: { mt: 16 } }}
      />
      <TopBar
        title="Title"
        subtitle="Subtitle"
        titleAlign="left"
        leftElement={
          <Icon
            icon="https://cdn140.picsart.com/26310888-8bb9-4817-9815-f9c2dbbb509a/378333362007203.jpg?type=webp&to=crop&r=256"
            p={{ pa: 0 }}
            m={{ mr: 16 }}
          />
        }
        card={{ m: { mt: 16 } }}
      />
      <TopBar
        title="Title"
        subtitle="Subtitle"
        titleAlign="right"
        card={{ m: { mt: 16, mb: 48 } }}
      />
      Modal
      <Button onClick={() => setShowModal(true)} m={{ mt: 16, mb: 48 }}>
        Show Modal
      </Button>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        header={{
          title: "Modal titlte",
          card: { p: { py: 8, px: 12 } },
          rightElement: (
            <Fab
              icon={{ icon: faXmark }}
              iconColor="secondary"
              onClick={() => setShowModal(false)}
            />
          ),
        }}
      >
        sadf
      </Modal>
    </div>
  );
};

export default App;
