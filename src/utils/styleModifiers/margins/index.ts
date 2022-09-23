// utils
import { IMargins } from "./props";

export const applyMargins = ({ m }: IMargins) => {
  return m === undefined
    ? undefined
    : typeof m === "number"
    ? { margin: `${m}px` }
    : {
        ...(m.all !== undefined && { margin: `${m.all}px` }),
        ...(m.top !== undefined && { marginTop: `${m.top}px` }),
        ...(m.right !== undefined && { marginRight: `${m.right}px` }),
        ...(m.bottom !== undefined && { marginBottom: `${m.bottom}px` }),
        ...(m.left !== undefined && { marginLeft: `${m.left}px` }),
      };
};
