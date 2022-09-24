// utils
import { FunctionComponent } from "react";
import { ITabs } from "./props";
import cn from "classnames";

// styles
import "./styles.scss";

// style modifiers
import { applyMargin } from "@/utils/styleModifiers/margin";

const Tabs: FunctionComponent<ITabs> = ({
  tabs,
  activeTabId,
  onChange,
  optional = false,
  m,
}) => {
  const activeTabIndex =
    activeTabId === "" ? 0 : tabs.findIndex((tab) => tab.id === activeTabId);

  return (
    <div className="tabs" style={{ ...applyMargin({ m }) }}>
      {!optional && (
        <div
          className="tabs__selector"
          style={{
            width: `${100 / tabs.length}%`,
            left: `${activeTabIndex * (100 / tabs.length)}%`,
          }}
        />
      )}
      <div className="tabs__holder">
        {tabs.map((tab) => (
          <button
            className={cn({
              tabs__tab: true,
              "tabs__tab--active": tab.id === activeTabId,
              "tabs__tab--optional": optional,
            })}
            key={tab.id}
            onClick={() => {
              if (onChange) {
                if (activeTabId === tab.id) {
                  if (optional) {
                    onChange(activeTabId === "" ? tab.id : "");
                  }
                } else {
                  onChange(tab.id);
                }
              }
            }}
            disabled={!optional && tab.id === activeTabId}
          >
            <span className="tabs__tab-title">{tab.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
