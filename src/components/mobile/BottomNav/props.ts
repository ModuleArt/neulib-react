import { IComponent } from "@/types/component";
import { IMargin } from "@/utils/componentModifiers/margin/props";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { IIcon } from "@/components/basic/Icon/props";

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
