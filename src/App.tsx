import { useState } from "react";

import Tabs from "@/components/core/Tabs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Tabs tabs={[{ title: "tab 1", id: "tab 1" }]} activeTabId="tab 1" />
    </div>
  );
}

export default App;
