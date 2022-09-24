// utils
import extend from "just-extend";

export const applyDefaultProps = <TInput>(
  defaultProps: TInput,
  newProps: TInput | undefined
): TInput => {
  if (newProps === undefined) {
    return defaultProps;
  } else if (typeof defaultProps === "object" && typeof newProps === "object") {
    return extend(defaultProps as object, newProps) as TInput;
  } else {
    return newProps as TInput;
  }
};
