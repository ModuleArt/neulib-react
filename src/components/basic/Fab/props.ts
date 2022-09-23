import { IMargins } from "@/utils/styleModifiers/margins/props";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IFab extends IMargins {
  variant?: "default" | "primary";
  onClick?: () => void;
  icon: IconDefinition;
}
