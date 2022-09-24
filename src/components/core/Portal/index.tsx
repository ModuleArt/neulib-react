// utils
import { FunctionComponent } from "react";
import { createPortal } from "react-dom";
import { IComponent } from "@/types/component";

const Portal: FunctionComponent<IComponent> = ({ children }) => {
  return createPortal(children, document.getElementById("root")!);
};

export default Portal;
