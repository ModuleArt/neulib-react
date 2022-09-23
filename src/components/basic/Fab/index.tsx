// utils
import { FunctionComponent } from "react";
import { IFab } from "./props";
import cn from "classnames";

// components
import Element from "@/components/core/Element";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// styles
import "./styles.scss";
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
      <div className="fab__icon">
        <FontAwesomeIcon icon={icon} />
      </div>
    </button>
  );
};

export default Fab;
