// utils
import { FunctionComponent } from "react";
import { IButton } from "./props";
import cn from "classnames";

// components
import Element from "@/components/core/Element";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// styles
import "./styles.scss";

const Button: FunctionComponent<IButton> = ({
  variant = "default",
  onClick,
  size = "default",
  children,
  ...props
}) => {
  return (
    <Element {...props}>
      <button
        className={cn({
          button: true,
          "button--primary": variant === "primary",
          "button--large": size === "large",
        })}
      >
        {children}
      </button>
    </Element>
  );
};

export default Button;
