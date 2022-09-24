// utils
import { IPadding } from "./props";

export const applyPadding = ({ p }: IPadding) => {
  return p === undefined
    ? undefined
    : typeof p === "number"
    ? { padding: `${p}px` }
    : {
        ...(p.pa !== undefined && { padding: `${p.pa}px` }),
        ...(p.py !== undefined && {
          paddingTop: `${p.py}px`,
          paddingBottom: `${p.py}px`,
        }),
        ...(p.px !== undefined && {
          paddingRight: `${p.px}px`,
          paddingLeft: `${p.px}px`,
        }),
        ...(p.pt !== undefined && { paddingTop: `${p.pt}px` }),
        ...(p.pr !== undefined && { paddingRight: `${p.pr}px` }),
        ...(p.pb !== undefined && { paddingBottom: `${p.pb}px` }),
        ...(p.pl !== undefined && { paddingLeft: `${p.pl}px` }),
      };
};
