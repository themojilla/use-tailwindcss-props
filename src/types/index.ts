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

export interface TailwindProps extends InteractionProps {
  _sm?: BasicProps;
  _md?: BasicProps;
  _lg?: BasicProps;
  _xl?: BasicProps;
  _2xl?: BasicProps;
}

export interface InteractionProps extends ResponsiveProps {
  _first?: ResponsiveProps;
  _last?: ResponsiveProps;
  _odd?: ResponsiveProps;
  _even?: ResponsiveProps;
  _visited?: ResponsiveProps;
  _checked?: ResponsiveProps;
  _groupHover?: ResponsiveProps;
  _groupFocus?: ResponsiveProps;
  _focusWithin?: ResponsiveProps;
  _hover?: ResponsiveProps;
  _focus?: ResponsiveProps;
  _focusVisible?: ResponsiveProps;
  _active?: ResponsiveProps;
  _disabled?: ResponsiveProps;
}

export interface BasicProps {
  /** Layout */
  container?: boolean;
  boxSizing?: BoxSizing;
  display?: Display;
  float?: Float;
  clear?: Clear;
  objectFit?: ObjectFit;
  objectPosition?: ObjectPosition;
  overflow?: Overflow;
  overflowX?: Overflow;
  overflowY?: Overflow;
  overscroll?: Overscroll;
  overscrollX?: Overscroll;
  overscrollY?: Overscroll;
  position?: Position;
  top?: TailwindSpaces;
  left?: TailwindSpaces;
  bottom?: TailwindSpaces;
  right?: TailwindSpaces;
  inset?: TailwindSpaces;
  insetX?: TailwindSpaces;
  insetY?: TailwindSpaces;
  visible?: boolean;
  invisible?: boolean;
  zIndex?: ZIndex;

  /** Flex */
  flexDirection?: FlexDirection;
  flexWrap?: FlexWrap;
  flex?: Flex;
  flexGrow?: FlexGrowShrink;
  flexShrink?: FlexGrowShrink;
  order?: Order;

  /** Grid */
  gridTemplateCols?: GridTemplateCols;
  gridTemplateRows?: GridTemplateRows;
  gridCols?: GridCols;
  gridRow?: GridRows;
  gridFlow?: GridFlow;
  autoCols?: GridAuto;
  autoRows?: GridAuto;
  gap?: Gap;
  gapX?: Gap;
  gapY?: Gap;

  /** Box Alignment */
  justifyContent?: JustifyContent;
  justifyItems?: JustifyItems;
  justifySelf?: JustifySelf;
  alignContent?: AlignContent;
  alignItems?: AlignItems;
  alignSelf?: AlignSelf;
  placeContent?: PlaceContent;
  placeItems?: PlaceItems;
  placeSelf?: PlaceSelf;

  /** Spacing */
  p?: Padding;
  px?: Padding;
  py?: Padding;
  pt?: Padding;
  pb?: Padding;
  pr?: Padding;
  pl?: Padding;
  m?: Margin;
  mx?: Margin;
  my?: Margin;
  mt?: Margin;
  mb?: Margin;
  mr?: Margin;
  ml?: Margin;
  spaceX?: SpaceBetween;
  spaceY?: SpaceBetween;

  /** Sizing */
  w?: Width;
  minW?: MinWidth;
  maxW?: MaxWidth;
  h?: Height;
  minH?: MinHeight;
  maxH?: MaxHeight;

  /** Typography */
  font?: FontFamily;
  fontSize?: FontSize;
  italic?: boolean;
  nonItalic?: boolean;
  antialiased?: boolean;
  subpixelAntialiased?: boolean;
  fontWeight?: FontWeight;
  fontVariantNumeric?: FontVariantNumeric;
  tracking?: LetterSpacing;
  leading?: LineHeight;
  listStyle?: ListStyle;
  listPosition?: ListStylePosition;
  placeholderColor?: PlaceholderColor;
  placeholderOpacity?: PlaceholderOpacity;
  textAlign?: TextAlign;
  textColor?: TextColor;
  textOpacity?: TextOpacity;
  textOverflow?: TextOverflow;
  underline?: boolean;
  lineThrough?: boolean;
  noUnderline?: boolean;
  uppercase?: boolean;
  lowercase?: boolean;
  capitalize?: boolean;
  normalCase?: boolean;
  truncate?: boolean;
  align?: VerticalAlign;
  whitespace?: Whitespace;
  break?: Wordbreak;

  /** Backgrounds */
  bgAttachment?: BackgroundAttachment;
  bgClip?: BackgroundClip;
  bgColor?: BackgroundColor;
  bgOpacity?: BackgroundOpacity;
  bgPosition?: BackgroundPosition;
  bgRepeat?: BackgroundRepeat;
  bgSize?: BackgroundSize;
  bgImage?: BackgroundImage;
  gradientFrom?: GradientColor;
  gradientVia?: GradientColor;
  gradientTo?: GradientColor;

  /** Borders */
  rounded?: BorderRadius;
  roundedT?: BorderRadius;
  roundedB?: BorderRadius;
  roundedL?: BorderRadius;
  roundedR?: BorderRadius;
  roundedTl?: BorderRadius;
  roundedTr?: BorderRadius;
  roundedBl?: BorderRadius;
  roundedBr?: BorderRadius;
  border?: BorderWidth;
  borderT?: BorderWidth;
  borderB?: BorderWidth;
  borderL?: BorderWidth;
  borderR?: BorderWidth;
  borderColor?: BorderColor;
  borderOpacity?: BorderOpacity;
  borderStyle?: BorderStyle;
  divideX?: DivideWidth;
  divideY?: DivideWidth;
  divideColor?: DivideColor;
  divideOpacity?: DivideOpacity;
  divideStyle?: DivideStyle;
  ring?: RingWidth;
  ringColor?: RingColor;
  ringOpacity?: RingOpacity;
  ringOffset?: RingOffsetWidth;
  ringOffsetColor?: RingOffsetColor;

  /** Effects */
  shadow?: TailwindShadows;
  opacity?: TailwindOpacities;

  /** Tables */
  borderCollapse?: BorderCollapse;
  table?: TableLayout;

  /** Transitions and Animations */
  transition?: Transition;
  duration?: Duration;
  ease?: Ease;
  delay?: Delay;
  animate?: Animation;

  /** Transforms */
  transform?: Transform;
  origin?: TransformOrigin;
  scale?: Scale;
  scaleX?: Scale;
  scaleY?: Scale;
  rotate?: Rotate;
  translateX?: Translate;
  translateY?: Translate;
  skewX?: Skew;
  skewY?: Skew;

  /** Interactivity */
  appearanceNone?: boolean;
  cursor?: Cursor;
  outline?: Outline;
  pointerEvents?: PointerEvents;
  resize?: Resize;
  select?: UserSelect;

  /** SVG */
  fillCurrent?: boolean;
  strokeCurrent?: boolean;
  stroke?: StrokeWidth;

  /** Screen Readers */
  srOnly?: boolean;
  notSrOnly?: boolean;
}

export interface ResponsiveProps {
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
