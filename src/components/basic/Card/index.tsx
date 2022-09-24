// utils
import { FunctionComponent } from "react";
import { ICard } from "./props";
import cn from "classnames";

// styles
import "./styles.scss";

// style modifiers
import { applyMargin } from "@/utils/styleModifiers/margin";
import { applyPadding } from "@/utils/styleModifiers/padding";

const Card: FunctionComponent<ICard> = ({
  variant = "default",
  children,
  m,
  p,
}) => {
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
