import { IElement } from "@/components/core/Element/props";

export interface IButton extends IElement {
  value?: boolean;
  onChange?: (value: boolean) => void;
}
