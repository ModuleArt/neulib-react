import { IComponent } from "@/types/component";
import { IPadding } from "@/utils/styleModifiers/padding/props";
import { ITopBar } from "@/components/basic/TopBar/props";

export interface IModal extends IComponent, IPadding {
  show?: boolean;
  onClose?: () => void;
  maxWidth?: number;
  header?: ITopBar;
}
