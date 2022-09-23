export interface IMargins {
  m?:
    | number
    | {
        all?: number;
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
      };
}
