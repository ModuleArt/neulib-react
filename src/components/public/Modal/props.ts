import { IComponent } from "@/types/component";
import { IPadding } from "@/utils/componentModifiers/padding/props";
import { ITopBar } from "@/components/public/TopBar/props";

export interface IModal extends IComponent, IPadding {
  show?: boolean;
  onClose?: () => void;
  maxWidth?: number;
  header?: ITopBar;
  posX?: "left" | "center" | "right";
  posY?: "top" | "center" | "bottom";
}
