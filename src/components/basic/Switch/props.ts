import { IComponent } from "@/types/component";
import { IMargin } from "@/utils/componentModifiers/margin/props";

export interface ISwitch extends IMargin {
  value?: boolean;
  onChange?: (value: boolean) => void;
}
