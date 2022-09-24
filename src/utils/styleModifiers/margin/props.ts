export interface IMargin {
  m?:
    | number
    | {
        ma?: number;
        my?: number;
        mx?: number;
        mt?: number;
        mr?: number;
        mb?: number;
        ml?: number;
      };
}
