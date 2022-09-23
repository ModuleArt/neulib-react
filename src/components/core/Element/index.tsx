// utils
import { FunctionComponent } from "react";
import { IElement } from "./props";

const Element: FunctionComponent<IElement> = ({ m, children }) => {
  return (
    <div
      className="element"
      style={
        m === undefined
          ? m
          : typeof m === "number"
          ? { margin: `${m}px` }
          : {
              ...(m.all !== undefined && { margin: `${m.all}px` }),
              ...(m.top !== undefined && { marginTop: `${m.top}px` }),
              ...(m.right !== undefined && { marginRight: `${m.right}px` }),
              ...(m.bottom !== undefined && { marginBottom: `${m.bottom}px` }),
              ...(m.left !== undefined && { marginLeft: `${m.left}px` }),
            }
      }
    >
      {children}
    </div>
  );
};

export default Element;
