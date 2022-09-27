// utils
import { FunctionComponent, Fragment } from "react";
import { IModal } from "./props";
import { applyDefaultProps } from "@/utils/componentModifiers";
import cn from "classnames";

// components
import Portal from "@/components/core/Portal";
import TopBar from "@/components/public/TopBar";

// styles
import "./styles.scss";

// component modifiers
import { applyPadding } from "@/utils/componentModifiers/padding";

const Modal: FunctionComponent<IModal> = ({
  show = false,
  onClose,
  children,
  maxWidth = 400,
  p,
  header,
  posX = "center",
  posY = "center",
}) => {
  p = applyDefaultProps({ pa: 24 }, p);

  return (
    <Fragment>
      {show && (
        <Portal>
          <div
            className={cn({
              modal: true,
              [`modal--pos-x-${posX}`]: true,
              [`modal--pos-y-${posY}`]: true,
            })}
          >
            <div className="modal__backdrop" onClick={onClose}>
              <div
                className="modal__container"
                onClick={(e) => {
                  e.stopPropagation();
                }}
                style={{ maxWidth: `${maxWidth}px` }}
              >
                {header && <TopBar {...header} />}
                <div className="modal__body" style={{ ...applyPadding({ p }) }}>
                  {children}
                </div>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </Fragment>
  );
};

export default Modal;
