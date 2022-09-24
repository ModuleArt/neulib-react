import { IComponent } from "@/types/component";
import { IMargin } from "@/utils/styleModifiers/margin/props";
import { IPadding } from "@/utils/styleModifiers/padding/props";

export interface ICard extends IComponent, IMargin, IPadding {
  variant?: "default" | "nobg";
}
