import { IComponent } from "@/types/component";
import { IMargins } from "@/utils/styleModifiers/margins/props";

export interface IButton extends IComponent, IMargins {
  variant?: "default" | "primary";
  onClick?: () => void;
  size?: "default" | "large";
}
