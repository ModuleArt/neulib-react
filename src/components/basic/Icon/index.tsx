// utils
import { FunctionComponent } from "react";
import { IIcon } from "./props";

// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// styles
import "./styles.scss";

// style modifiers
import { applyMargins } from "@/utils/styleModifiers/margins";

const Icon: FunctionComponent<IIcon> = ({ icon, children, ...props }) => {
  return (
    <div className="icon" style={{ ...applyMargins(props) }}>
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

export default Icon;
