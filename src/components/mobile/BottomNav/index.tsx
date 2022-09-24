// utils
import { FunctionComponent } from "react";
import { IBottomNav } from "./props";
import cn from "classnames";

// components
import Icon from "@/components/basic/Icon";

// styles
import "./styles.scss";

// component modifiers
import { applyMargin } from "@/utils/componentModifiers/margin";

const BottomNav: FunctionComponent<IBottomNav> = ({
  leftButtons,
  rightButtons,
  onButtonClick,
  activeButtonId,
  children,
  m,
}) => {
  return (
    <div className="bottom-nav" style={{ ...applyMargin({ m }) }}>
      {leftButtons && leftButtons.length > 0 && (
        <div className="bottom-nav__holder bottom-nav__holder--left">
          {leftButtons?.map((button) => (
            <button
              className={cn({
                "bottom-nav__button": true,
                "bottom-nav__button--active": button.id === activeButtonId,
              })}
              key={button.id}
              onClick={() => onButtonClick && onButtonClick(button.id)}
            >
              <div className="bottom-nav__icon">
                <Icon {...button.icon} />
              </div>
            </button>
          ))}
        </div>
      )}
      {children}
      {rightButtons && rightButtons.length > 0 && (
        <div className="bottom-nav__holder bottom-nav__holder--right">
          {rightButtons?.map((button) => (
            <button
              className={cn({
                "bottom-nav__button": true,
                "bottom-nav__button--active": button.id === activeButtonId,
              })}
              key={button.id}
              onClick={() => onButtonClick && onButtonClick(button.id)}
            >
              <div className="bottom-nav__icon">
                <Icon {...button.icon} />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default BottomNav;
