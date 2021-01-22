import { TailwindColors, TailwindOpacities } from "./color";

export type BorderRadius =
  | true
  | "none"
  | "sm"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "full";

export type BorderWidth = true | "0" | "2" | "4" | "8";
export type BorderColor = TailwindColors;
export type BorderOpacity = TailwindOpacities;
export type BorderStyle = "solid" | "dashed" | "dotted" | "double" | "none";
export type DivideWidth = true | "0" | "2" | "4" | "8" | "reverse";
export type DivideColor = TailwindColors;
export type DivideOpacity = TailwindOpacities;
export type DivideStyle = "solid" | "dashed" | "dotted" | "double" | "none";
export type RingWidth = true | "0" | "1" | "2" | "4" | "8" | "inset";
export type RingColor = TailwindColors;
export type RingOpacity = TailwindOpacities;
export type RingOffsetWidth = "0" | "1" | "2" | "4" | "8" | "inset";
export type RingOffsetColor = TailwindColors;
