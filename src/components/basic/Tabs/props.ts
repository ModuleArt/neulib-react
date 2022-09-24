import { IMargin } from "@/utils/styleModifiers/margin/props";

export interface ITabs extends IMargin {
  tabs: { title: string; id: string }[];
  activeTabId?: string;
  onChange?: (tabId: string) => void;
  optional?: boolean;
}
