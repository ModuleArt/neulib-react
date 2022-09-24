import { IMargin } from "@/utils/componentModifiers/margin/props";

export interface ITabs extends IMargin {
  tabs: { title: string; id: string }[];
  activeTabId?: string;
  onChange?: (tabId: string) => void;
  optional?: boolean;
}
