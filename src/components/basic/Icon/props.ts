import { IComponent } from "@/types/component";
import { IMargins } from "@/utils/styleModifiers/margins/props";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IIcon extends IComponent, IMargins {
  icon: IconDefinition;
}
