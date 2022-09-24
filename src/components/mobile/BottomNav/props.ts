import { IComponent } from "@/types/component";
import { IMargins } from "@/utils/styleModifiers/margins/props";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IBottomNav extends IComponent, IMargins {
  leftButtons?: {
    id: string;
    icon: IconDefinition;
  }[];
  rightButtons?: {
    id: string;
    icon: IconDefinition;
  }[];
  activeButtonId?: string;
  onButtonClick?: (navButtonId: string) => void;
}
