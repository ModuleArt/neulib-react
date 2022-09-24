import { IMargin } from "@/utils/styleModifiers/margin/props";
import { IPadding } from "@/utils/styleModifiers/padding/props";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IIcon extends IMargin, IPadding {
  icon: IconDefinition | string;
}
