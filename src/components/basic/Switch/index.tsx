// utils
import { FunctionComponent } from "react";
import { IButton } from "./props";
import cn from "classnames";

// components
import Element from "@/components/core/Element";

// styles
import "./styles.scss";

const Switch: FunctionComponent<IButton> = ({
  value = false,
  onChange,
  ...props
}) => {
  return (
    <Element {...props}>
      <button
        className={cn({
          switch: true,
          "switch--active": value,
        })}
        onClick={() => onChange && onChange(!value)}
      >
        <div className="switch__dot" />
      </button>
    </Element>
  );
};

export default Switch;
