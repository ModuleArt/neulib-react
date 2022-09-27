import { ReactNode } from "react";
import { ICard } from "@/components/public/Card/props";

export interface ITopBar {
  title: string;
  subtitle?: string;
  textAlign?: "center" | "left" | "right";
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  card?: ICard;
}
