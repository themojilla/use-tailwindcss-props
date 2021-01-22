import { TailwindColors, TailwindOpacities } from "./color";

export type FontFamily = "sans" | "serif" | "mono";
export type FontSize =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl";
export type FontSmoothing = "antialiased" | "subpixel-antialiased";
export type FontWeight =
  | "thin"
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";
export type FontVariantNumeric =
  | "normal-sums"
  | "ordinal"
  | "slashed-zero"
  | "lining-nums"
  | "oldstyle-nums"
  | "proportional-nums"
  | "tabular-nums"
  | "diagonal-fractions"
  | "stacked-fractions";
export type LetterSpacing =
  | "tighter"
  | "tight"
  | "normal"
  | "wide"
  | "wider"
  | "widest";
export type LineHeight =
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "none"
  | "tight"
  | "snug"
  | "normal"
  | "relaxed"
  | "loose";
export type ListStyle = "none" | "disc" | "decimal";
export type ListStylePosition = "inside" | "outside";
export type PlaceholderColor = TailwindColors;
export type PlaceholderOpacity = TailwindOpacities;
export type TextAlign = "left" | "center" | "right" | "justify";
export type TextColor = TailwindColors;
export type TextOpacity = TailwindOpacities;
export type TextOverflow = "ellipsis" | "clip";
export type VerticalAlign =
  | "baseline"
  | "top"
  | "middle"
  | "bottom"
  | "text-top"
  | "text-bottom";
export type Whitespace = "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap";
export type Wordbreak = "normal" | "words" | "all";
