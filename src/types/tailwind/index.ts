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
import {
  BackgroundAttachment,
  BackgroundClip,
  BackgroundColor,
  BackgroundImage,
  BackgroundOpacity,
  BackgroundPosition,
  BackgroundRepeat,
  BackgroundSize,
  GradientColor,
} from "./background";
import {
  BorderColor,
  BorderOpacity,
  BorderRadius,
  BorderStyle,
  BorderWidth,
  DivideColor,
  DivideOpacity,
  DivideStyle,
  DivideWidth,
  RingColor,
  RingOffsetColor,
  RingOffsetWidth,
  RingOpacity,
  RingWidth,
} from "./border";
import { TailwindOpacities, TailwindShadows } from "./color";
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
  Cursor,
  Outline,
  PointerEvents,
  Resize,
  UserSelect,
} from "./interactivity";
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
import { StrokeWidth } from "./svg";
import { BorderCollapse, TableLayout } from "./table";
import {
  Rotate,
  Scale,
  Skew,
  Transform,
  TransformOrigin,
  Translate,
} from "./transform";
import { Animation, Delay, Duration, Ease, Transition } from "./transition";
import {
  FontFamily,
  FontSize,
  FontVariantNumeric,
  FontWeight,
  LetterSpacing,
  LineHeight,
  ListStyle,
  ListStylePosition,
  PlaceholderColor,
  PlaceholderOpacity,
  TextAlign,
  TextColor,
  TextOpacity,
  TextOverflow,
  VerticalAlign,
  Whitespace,
  Wordbreak,
} from "./typography";

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

  /** Typography */
  font?: Responsive<FontFamily>;
  fontSize?: Responsive<FontSize>;
  italic?: Responsive<boolean>;
  nonItalic?: Responsive<boolean>;
  antialiased?: Responsive<boolean>;
  subpixelAntialiased?: Responsive<boolean>;
  fontWeight?: Responsive<FontWeight>;
  fontVariantNumeric?: Responsive<FontVariantNumeric>;
  tracking?: Responsive<LetterSpacing>;
  leading?: Responsive<LineHeight>;
  listStyle?: Responsive<ListStyle>;
  listPosition?: Responsive<ListStylePosition>;
  placeholderColor?: Responsive<PlaceholderColor>;
  placeholderOpacity?: Responsive<PlaceholderOpacity>;
  textAlign?: Responsive<TextAlign>;
  textColor?: Responsive<TextColor>;
  textOpacity?: Responsive<TextOpacity>;
  textOverflow?: Responsive<TextOverflow>;
  underline?: Responsive<boolean>;
  lineThrough?: Responsive<boolean>;
  noUnderline?: Responsive<boolean>;
  uppercase?: Responsive<boolean>;
  lowercase?: Responsive<boolean>;
  capitalize?: Responsive<boolean>;
  normalCase?: Responsive<boolean>;
  truncate?: Responsive<boolean>;
  align?: Responsive<VerticalAlign>;
  whitespace?: Responsive<Whitespace>;
  break?: Responsive<Wordbreak>;

  /** Backgrounds */
  bgAttachment?: Responsive<BackgroundAttachment>;
  bgClip?: Responsive<BackgroundClip>;
  bgColor?: Responsive<BackgroundColor>;
  bgOpacity?: Responsive<BackgroundOpacity>;
  bgPosition?: Responsive<BackgroundPosition>;
  bgRepeat?: Responsive<BackgroundRepeat>;
  bgSize?: Responsive<BackgroundSize>;
  bgImage?: Responsive<BackgroundImage>;
  gradientFrom?: Responsive<GradientColor>;
  gradientVia?: Responsive<GradientColor>;
  gradientTo?: Responsive<GradientColor>;

  /** Borders */
  rounded?: Responsive<BorderRadius>;
  roundedT?: Responsive<BorderRadius>;
  roundedB?: Responsive<BorderRadius>;
  roundedL?: Responsive<BorderRadius>;
  roundedR?: Responsive<BorderRadius>;
  roundedTl?: Responsive<BorderRadius>;
  roundedTr?: Responsive<BorderRadius>;
  roundedBl?: Responsive<BorderRadius>;
  roundedBr?: Responsive<BorderRadius>;
  border?: Responsive<BorderWidth>;
  borderT?: Responsive<BorderWidth>;
  borderB?: Responsive<BorderWidth>;
  borderL?: Responsive<BorderWidth>;
  borderR?: Responsive<BorderWidth>;
  borderColor?: Responsive<BorderColor>;
  borderOpacity?: Responsive<BorderOpacity>;
  borderStyle?: Responsive<BorderStyle>;
  divideX?: Responsive<DivideWidth>;
  divideY?: Responsive<DivideWidth>;
  divideColor?: Responsive<DivideColor>;
  divideOpacity?: Responsive<DivideOpacity>;
  divideStyle?: Responsive<DivideStyle>;
  ring?: Responsive<RingWidth>;
  ringColor?: Responsive<RingColor>;
  ringOpacity?: Responsive<RingOpacity>;
  ringOffsetWidth?: Responsive<RingOffsetWidth>;
  ringOffsetColor?: Responsive<RingOffsetColor>;

  /** Effects */
  shadow?: Responsive<TailwindShadows>;
  opacity?: Responsive<TailwindOpacities>;

  /** Tables */
  borderCollapse?: Responsive<BorderCollapse>;
  table?: Responsive<TableLayout>;

  /** Transitions and Animations */
  transition?: Responsive<Transition>;
  duration?: Responsive<Duration>;
  ease?: Responsive<Ease>;
  delay?: Responsive<Delay>;
  animate?: Responsive<Animation>;

  /** Transforms */
  transform?: Responsive<Transform>;
  origin?: Responsive<TransformOrigin>;
  scale?: Responsive<Scale>;
  scaleX?: Responsive<Scale>;
  scaleY?: Responsive<Scale>;
  rotate?: Responsive<Rotate>;
  translateX?: Responsive<Translate>;
  translateY?: Responsive<Translate>;
  skewX?: Responsive<Skew>;
  skewY?: Responsive<Skew>;

  /** Interactivity */
  appearanceNone?: Responsive<boolean>;
  cursor?: Responsive<Cursor>;
  outline?: Responsive<Outline>;
  pointerEvents?: Responsive<PointerEvents>;
  resize?: Responsive<Resize>;
  select?: Responsive<UserSelect>;

  /** SVG */
  fillCurrent?: Responsive<boolean>;
  strokeCurrent?: Responsive<boolean>;
  stroke?: Responsive<StrokeWidth>;

  /** Screen Readers */
  srOnly?: Responsive<boolean>;
  notSrOnly?: Responsive<boolean>;
}
