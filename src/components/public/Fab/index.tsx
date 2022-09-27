// utils
import { FunctionComponent } from "react";
import { IFab } from "./props";
import cn from "classnames";

// components
import Icon from "@/components/public/Icon";

// styles
import "./styles.scss";

// component modifiers
import { applyMargin } from "@/utils/componentModifiers/margin";

const Fab: FunctionComponent<IFab> = ({
  variant = "default",
  onClick,
  iconColor = "default",
  m,
  icon,
}) => {
  return (
    <button
      className={cn({
        fab: true,
        "fab--primary": variant === "primary",
        "fab--nobg": variant === "nobg",
      })}
      onClick={onClick}
      style={{ ...applyMargin({ m }) }}
    >
      <div
        className={cn({
          fab__icon: true,
          "fab__icon--secondary": iconColor === "secondary",
        })}
      >
        <Icon {...icon} />
      </div>
    </button>
  );
};

export default Fab;
