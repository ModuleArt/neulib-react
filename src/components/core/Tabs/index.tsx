// utils
import { FunctionComponent } from "react";
import Props from "./props";
import cn from "classnames";

// styles
import "./styles.scss";

const Tabs: FunctionComponent<Props> = ({ tabs, activeTabId, onTabClick }) => {
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          className={cn({
            tabs__tab: true,
            "tabs__tab--active": tab.id === activeTabId,
          })}
          key={tab.id}
          onClick={() => onTabClick && onTabClick(tab.id)}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
