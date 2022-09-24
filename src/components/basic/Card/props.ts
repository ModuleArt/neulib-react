import { IComponent } from "@/types/component";
import { IMargin } from "@/utils/componentModifiers/margin/props";
import { IPadding } from "@/utils/componentModifiers/padding/props";

export interface ICard extends IComponent, IMargin, IPadding {
  variant?: "default" | "nobg";
}
