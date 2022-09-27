// utils
import { FunctionComponent } from "react";
import { ITopBar } from "./props";
import cn from "classnames";
import { applyDefaultProps } from "@/utils/componentModifiers";

// components
import Card from "@/components/public/Card";

// styles
import "./styles.scss";

const TopBar: FunctionComponent<ITopBar> = ({
  title,
  subtitle,
  textAlign = "center",
  leftElement,
  rightElement,
  card,
}) => {
  card = applyDefaultProps({ p: { py: 12 } }, card);

  return (
    <div
      className={cn({
        "top-bar": true,
        [`top-bar--align-${textAlign}`]: true,
      })}
    >
      <Card {...card}>
        <div className="top-bar__container">
          <div className="top-bar__left-side">
            {leftElement && (
              <div className="top-bar__left-element">{leftElement}</div>
            )}
          </div>
          <div className="top-bar__middle">
            <div className="top-bar__title">{title}</div>
            {subtitle && <div className="top-bar__subtitle">{subtitle}</div>}
          </div>
          <div className="top-bar__right-side">
            {rightElement && (
              <div className="top-bar__right-element">{rightElement}</div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TopBar;
