import { IElement } from "@/components/core/Element/props";

export interface ITabs extends IElement {
  tabs: { title: string; id: string }[];
  activeTabId?: string;
  onChange?: (tabId: string) => void;
  optional?: boolean;
}
