// utils
import { FunctionComponent } from "react";
import { IIcon } from "./props";

// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// styles
import "./styles.scss";

// style modifiers
import { applyMargin } from "@/utils/styleModifiers/margin";
import { applyPadding } from "@/utils/styleModifiers/padding";

const Icon: FunctionComponent<IIcon> = ({ icon, ...props }) => {
  if (props.p === undefined) {
    props.p = 2;
  }

  return (
    <div
      className="icon"
      style={{ ...applyMargin(props), ...applyPadding(props) }}
    >
      {typeof icon === "string" ? (
        <img className="icon__img" src={icon} />
      ) : (
        <FontAwesomeIcon className="icon__fa" icon={icon} />
      )}
    </div>
  );
};

export default Icon;
