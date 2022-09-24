// utils
import { FunctionComponent } from "react";
import { ISwitch } from "./props";
import cn from "classnames";

// styles
import "./styles.scss";

// style modifiers
import { applyMargins } from "@/utils/styleModifiers/margins";

const Switch: FunctionComponent<ISwitch> = ({
  value = false,
  onChange,
  ...props
}) => {
  return (
    <button
      className={cn({
        switch: true,
        "switch--active": value,
      })}
      onClick={() => onChange && onChange(!value)}
      style={{ ...applyMargins(props) }}
    >
      <div className="switch__dot" />
    </button>
  );
};

export default Switch;
