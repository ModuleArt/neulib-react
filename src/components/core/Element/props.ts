import { ReactNode } from "react";

export interface IElement {
  m?:
    | number
    | {
        all?: number;
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
      };
  children?: ReactNode;
}
