import { IComponent } from "@/types/component";
import { IMargins } from "@/utils/styleModifiers/margins/props";

export interface ISwitch extends IComponent, IMargins {
  value?: boolean;
  onChange?: (value: boolean) => void;
}
