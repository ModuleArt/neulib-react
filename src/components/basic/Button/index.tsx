// utils
import { FunctionComponent } from "react";
import { IButton } from "./props";
import cn from "classnames";

// styles
import "./styles.scss";

// style modifiers
import { applyMargins } from "@/utils/styleModifiers/margins";

const Button: FunctionComponent<IButton> = ({
  variant = "default",
  onClick,
  size = "default",
  children,
  ...props
}) => {
  return (
    <button
      className={cn({
        button: true,
        "button--primary": variant === "primary",
        "button--large": size === "large",
      })}
      style={{ ...applyMargins(props) }}
    >
      {children}
    </button>
  );
};

export default Button;
