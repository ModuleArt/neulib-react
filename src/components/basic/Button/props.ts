import { IElement } from "@/components/core/Element/props";

export interface IButton extends IElement {
  variant?: "default" | "primary";
  onClick?: () => void;
  size?: "default" | "large";
}
