// utils
import { FunctionComponent } from "react";
import { ICard } from "./props";
import cn from "classnames";
import { applyDefaultProps } from "@/utils/componentModifiers";

// styles
import "./styles.scss";

// component modifiers
import { applyMargin } from "@/utils/componentModifiers/margin";
import { applyPadding } from "@/utils/componentModifiers/padding";

const Card: FunctionComponent<ICard> = ({
  variant = "default",
  children,
  m,
  p,
}) => {
  p = applyDefaultProps({ pa: 24 }, p);

  return (
    <div
      className={cn({
        card: true,
        "card--nobg": variant === "nobg",
      })}
      style={{ ...applyMargin({ m }), ...applyPadding({ p }) }}
    >
      {children}
    </div>
  );
};

export default Card;
