// utils
import { FunctionComponent, Fragment } from "react";
import { IModal } from "./props";

// components
import Portal from "@/components/core/Portal";
import TopBar from "@/components/basic/TopBar";

// styles
import "./styles.scss";

// style modifiers
import { applyPadding } from "@/utils/styleModifiers/padding";

const Modal: FunctionComponent<IModal> = ({
  show = false,
  onClose,
  children,
  maxWidth = 400,
  p = 24,
  header,
}) => {
  return (
    <Fragment>
      {show && (
        <Portal>
          <div className="modal">
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
