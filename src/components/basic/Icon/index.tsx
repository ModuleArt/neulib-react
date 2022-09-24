// utils
import { FunctionComponent } from "react";
import { IIcon } from "./props";
import { applyDefaultProps } from "@/utils/componentModifiers";

// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// styles
import "./styles.scss";

// component modifiers
import { applyMargin } from "@/utils/componentModifiers/margin";
import { applyPadding } from "@/utils/componentModifiers/padding";

const Icon: FunctionComponent<IIcon> = ({ icon, m, p }) => {
  p = applyDefaultProps({ pa: 2 }, p);

  return (
    <div
      className="icon"
      style={{ ...applyMargin({ m }), ...applyPadding({ p }) }}
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
