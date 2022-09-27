// utils
import { FunctionComponent } from "react";
import { IButton } from "./props";
import cn from "classnames";

// styles
import "./styles.scss";

// component modifiers
import { applyMargin } from "@/utils/componentModifiers/margin";

const Button: FunctionComponent<IButton> = ({
  variant = "default",
  onClick,
  size = "default",
  children,
  m,
}) => {
  return (
    <button
      className={cn({
        button: true,
        "button--primary": variant === "primary",
        "button--large": size === "large",
        "button--nobg": variant === "nobg",
      })}
      style={{ ...applyMargin({ m }) }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
