import { IMargin } from "@/utils/componentModifiers/margin/props";
import { IIcon } from "@/components/public/Icon/props";

export interface IFab extends IMargin {
  variant?: "default" | "primary" | "nobg";
  onClick?: () => void;
  iconColor?: "default" | "secondary";
  icon: IIcon;
}
