// utils
import { FunctionComponent } from "react";
import { IFab } from "./props";
import cn from "classnames";

// components
import Icon from "@/components/basic/Icon";

// styles
import "./styles.scss";

// style modifiers
import { applyMargins } from "@/utils/styleModifiers/margins";

const Fab: FunctionComponent<IFab> = ({
  variant = "default",
  onClick,
  icon,
  ...props
}) => {
  return (
    <button
      className={cn({
        fab: true,
        "fab--primary": variant === "primary",
      })}
      style={{ ...applyMargins(props) }}
    >
      <Icon icon={icon} />
    </button>
  );
};

export default Fab;
