// utils
import { IMargins } from "./props";

export const applyMargins = ({ m }: IMargins) => {
  return m === undefined
    ? undefined
    : typeof m === "number"
    ? { margin: `${m}px` }
    : {
        ...(m.ma !== undefined && { margin: `${m.ma}px` }),
        ...(m.my !== undefined && {
          marginTop: `${m.my}px`,
          marginBottom: `${m.my}px`,
        }),
        ...(m.mx !== undefined && {
          marginRight: `${m.mx}px`,
          marginLeft: `${m.mx}px`,
        }),
        ...(m.mt !== undefined && { marginTop: `${m.mt}px` }),
        ...(m.mr !== undefined && { marginRight: `${m.mr}px` }),
        ...(m.mb !== undefined && { marginBottom: `${m.mb}px` }),
        ...(m.ml !== undefined && { marginLeft: `${m.ml}px` }),
      };
};
