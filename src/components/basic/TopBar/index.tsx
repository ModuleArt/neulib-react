// utils
import { FunctionComponent } from "react";
import { ITopBar } from "./props";
import cn from "classnames";

// components
import Card from "@/components/basic/Card";

// styles
import "./styles.scss";

const TopBar: FunctionComponent<ITopBar> = ({
  title,
  subtitle,
  titleAlign = "center",
  leftElement,
  rightElement,
  card = { p: { px: 24, py: 12 } },
}) => {
  return (
    <div
      className={cn({
        "top-bar": true,
        [`top-bar--align-${titleAlign}`]: true,
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
