import { IComponent } from "@/types/component";
import { IMargin } from "@/utils/componentModifiers/margin/props";

export interface IButton extends IComponent, IMargin {
  variant?: "default" | "primary" | "nobg";
  onClick?: () => void;
  size?: "default" | "large";
}
