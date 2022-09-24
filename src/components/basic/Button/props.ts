import { IComponent } from "@/types/component";
import { IMargin } from "@/utils/styleModifiers/margin/props";

export interface IButton extends IComponent, IMargin {
  variant?: "default" | "primary";
  onClick?: () => void;
  size?: "default" | "large";
}
