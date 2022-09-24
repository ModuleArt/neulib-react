import { ReactNode } from "react";
import { ICard } from "@/components/basic/Card/props";

export interface ITopBar {
  title: string;
  subtitle?: string;
  titleAlign?: "center" | "left" | "right";
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  card?: ICard;
}
