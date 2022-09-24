import { IComponent } from "@/types/component";
import { IMargins } from "@/utils/styleModifiers/margins/props";

export interface ITabs extends IComponent, IMargins {
  tabs: { title: string; id: string }[];
  activeTabId?: string;
  onChange?: (tabId: string) => void;
  optional?: boolean;
}
