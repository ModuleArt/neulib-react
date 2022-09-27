import { IComponent } from "@/types/component";
import { IMargin } from "@/utils/componentModifiers/margin/props";
import { IIcon } from "@/components/public/Icon/props";

export interface IBottomNav extends IComponent, IMargin {
  leftButtons?: {
    id: string;
    icon: IIcon;
  }[];
  rightButtons?: {
    id: string;
    icon: IIcon;
  }[];
  activeButtonId?: string;
  onButtonClick?: (navButtonId: string) => void;
}
