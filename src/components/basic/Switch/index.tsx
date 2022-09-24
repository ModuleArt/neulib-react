// utils
import { FunctionComponent } from "react";
import { ISwitch } from "./props";
import cn from "classnames";

// styles
import "./styles.scss";

// style modifiers
import { applyMargin } from "@/utils/styleModifiers/margin";

const Switch: FunctionComponent<ISwitch> = ({ value = false, onChange, m }) => {
  return (
    <button
      className={cn({
        switch: true,
        "switch--active": value,
      })}
      onClick={() => onChange && onChange(!value)}
      style={{ ...applyMargin({ m }) }}
    >
      <div className="switch__dot" />
    </button>
  );
};

export default Switch;
