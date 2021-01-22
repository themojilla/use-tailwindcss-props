import {
  AlignContent,
  AlignItems,
  AlignSelf,
  JustifyContent,
  JustifyItems,
  JustifySelf,
  PlaceContent,
  PlaceItems,
  PlaceSelf,
} from "./alignment";
import { FlexDirection, FlexWrap, Flex, FlexGrowShrink, Order } from "./flex";
import {
  GridTemplateCols,
  GridTemplateRows,
  GridCols,
  GridRows,
  GridFlow,
  GridAuto,
  Gap,
} from "./grid";
import {
  BoxSizing,
  Display,
  Float,
  Clear,
  ObjectFit,
  ObjectPosition,
  Overflow,
  Overscroll,
  Position,
  ZIndex,
  TailwindSpaces,
} from "./layout";
import {
  Height,
  MaxHeight,
  MaxWidth,
  MinHeight,
  MinWidth,
  Width,
} from "./sizing";
import { Margin, Padding, SpaceBetween } from "./spacing";

type Responsive<T> = T | T[] | TailwindResponsive<T>;

interface TailwindResponsive<T> {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}

export interface TailwindProps {
  /** Layout */
  container?: Responsive<boolean>;
  boxSizing?: Responsive<BoxSizing>;
  display?: Responsive<Display>;
  float?: Responsive<Float>;
  clear?: Responsive<Clear>;
  objectFit?: Responsive<ObjectFit>;
  objectPosition?: Responsive<ObjectPosition>;
  overflow?: Responsive<Overflow>;
  overflowX?: Responsive<Overflow>;
  overflowY?: Responsive<Overflow>;
  overscroll?: Responsive<Overscroll>;
  overscrollX?: Responsive<Overscroll>;
  overscrollY?: Responsive<Overscroll>;
  position?: Responsive<Position>;
  top?: Responsive<TailwindSpaces>;
  left?: Responsive<TailwindSpaces>;
  bottom?: Responsive<TailwindSpaces>;
  right?: Responsive<TailwindSpaces>;
  inset?: Responsive<TailwindSpaces>;
  insetX?: Responsive<TailwindSpaces>;
  insetY?: Responsive<TailwindSpaces>;
  visible?: Responsive<boolean>;
  invisible?: Responsive<boolean>;
  zIndex?: Responsive<ZIndex>;

  /** Flex */
  flexDirection?: Responsive<FlexDirection>;
  flexWrap?: Responsive<FlexWrap>;
  flex?: Responsive<Flex>;
  flexGrow?: Responsive<FlexGrowShrink>;
  flexShrink?: Responsive<FlexGrowShrink>;
  order?: Responsive<Order>;

  /** Grid */
  gridTemplateCols?: Responsive<GridTemplateCols>;
  gridTemplateRows?: Responsive<GridTemplateRows>;
  gridCols?: Responsive<GridCols>;
  gridRow?: Responsive<GridRows>;
  gridFlow?: Responsive<GridFlow>;
  autoCols?: Responsive<GridAuto>;
  autoRows?: Responsive<GridAuto>;
  gap?: Responsive<Gap>;
  gapX?: Responsive<Gap>;
  gapY?: Responsive<Gap>;

  /** Box Alignment */
  justifyContent?: Responsive<JustifyContent>;
  justifyItems?: Responsive<JustifyItems>;
  justifySelf?: Responsive<JustifySelf>;
  alignContent?: Responsive<AlignContent>;
  alignItems?: Responsive<AlignItems>;
  alignSelf?: Responsive<AlignSelf>;
  placeContent?: Responsive<PlaceContent>;
  placeItems?: Responsive<PlaceItems>;
  placeSelf?: Responsive<PlaceSelf>;

  /** Spacing */
  p?: Responsive<Padding>;
  px?: Responsive<Padding>;
  py?: Responsive<Padding>;
  pt?: Responsive<Padding>;
  pb?: Responsive<Padding>;
  pr?: Responsive<Padding>;
  pl?: Responsive<Padding>;
  m?: Responsive<Margin>;
  mx?: Responsive<Margin>;
  my?: Responsive<Margin>;
  mt?: Responsive<Margin>;
  mb?: Responsive<Margin>;
  mr?: Responsive<Margin>;
  ml?: Responsive<Margin>;
  spaceX?: Responsive<SpaceBetween>;
  spaceY?: Responsive<SpaceBetween>;

  /** Sizing */
  w?: Responsive<Width>;
  minW?: Responsive<MinWidth>;
  maxW?: Responsive<MaxWidth>;
  h?: Responsive<Height>;
  minH?: Responsive<MinHeight>;
  maxH?: Responsive<MaxHeight>;

  textColor?: Responsive<TailwindColors>;
  borderColor?: Responsive<TailwindColors>;
  fillCurrent?: Responsive<boolean>;
}

type TailwindColors =
  | "gray-100"
  | "gray-200"
  | "gray-300"
  | "gray-400"
  | "gray-500"
  | "gray-600"
  | "gray-700"
  | "gray-800"
  | "gray-900"
  | "red-100"
  | "red-200"
  | "red-300"
  | "red-400"
  | "red-500"
  | "red-600"
  | "red-700"
  | "red-800"
  | "red-900"
  | "orange-100"
  | "orange-200"
  | "orange-300"
  | "orange-400"
  | "orange-500"
  | "orange-600"
  | "orange-700"
  | "orange-800"
  | "orange-900"
  | "yellow-100"
  | "yellow-200"
  | "yellow-300"
  | "yellow-400"
  | "yellow-500"
  | "yellow-600"
  | "yellow-700"
  | "yellow-800"
  | "yellow-900"
  | "green-100"
  | "green-200"
  | "green-300"
  | "green-400"
  | "green-500"
  | "green-600"
  | "green-700"
  | "green-800"
  | "green-900"
  | "teal-100"
  | "teal-200"
  | "teal-300"
  | "teal-400"
  | "teal-500"
  | "teal-600"
  | "teal-700"
  | "teal-800"
  | "teal-900"
  | "blue-100"
  | "blue-200"
  | "blue-300"
  | "blue-400"
  | "blue-500"
  | "blue-600"
  | "blue-700"
  | "blue-800"
  | "blue-900"
  | "indigo-100"
  | "indigo-200"
  | "indigo-300"
  | "indigo-400"
  | "indigo-500"
  | "indigo-600"
  | "indigo-700"
  | "indigo-800"
  | "indigo-900"
  | "purple-100"
  | "purple-200"
  | "purple-300"
  | "purple-400"
  | "purple-500"
  | "purple-600"
  | "purple-700"
  | "purple-800"
  | "purple-900"
  | "pink-100"
  | "pink-200"
  | "pink-300"
  | "pink-400"
  | "pink-500"
  | "pink-600"
  | "pink-700"
  | "pink-800"
  | "pink-900"
  | "current"
  | "black"
  | "white"
  | "transparent";
