import { IComponent } from "@/types/component";
import { IMargin } from "@/utils/styleModifiers/margin/props";

export interface ISwitch extends IComponent, IMargin {
  value?: boolean;
  onChange?: (value: boolean) => void;
}
