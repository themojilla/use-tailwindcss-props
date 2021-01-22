import { PressProps } from "@react-aria/interactions";
import { ReactNode } from "react";
import { TailwindProps } from "../tailwind";

export interface ButtonProps extends TailwindProps, PressProps {
  children?: ReactNode;
  as?: "button" | "a" | "div";
  id?: string;
  hoverStyle?: TailwindProps;
  pressStyle?: TailwindProps;
}
