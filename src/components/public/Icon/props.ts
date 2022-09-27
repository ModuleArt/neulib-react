import { IMargin } from "@/utils/componentModifiers/margin/props";
import { IPadding } from "@/utils/componentModifiers/padding/props";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IIcon extends IMargin, IPadding {
  icon: IconDefinition | string;
}
