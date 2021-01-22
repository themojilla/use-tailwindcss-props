import { TailwindProps } from "../types/tailwind";

const RESPONSIVE_ARRAY = ["sm", "md", "lg", "xl", "2xl"];

function isNegative(property: string) {
  return property[0] === "-";
}

function clean(array: string[]) {
  return array.filter((str) => !!str).join(" ");
}

function resolveProp<T>(prefix: string, property: T) {
  if (typeof property === "boolean") {
    return prefix;
  }
  if (typeof property === "string") {
    return isNegative(property)
      ? `-${prefix}${property}`
      : `${prefix}-${property}`;
  }
  return "";
}

function resolve<T>(prefix: string, property: T) {
  if (Array.isArray(property)) {
    return clean(
      (property as any[]).map((prop, index) => {
        const resolved = resolveProp<T>(prefix, prop);
        return resolved ? `${RESPONSIVE_ARRAY[index]}:${resolved}` : "";
      })
    );
  }

  if (typeof property === "object") {
    return clean(
      Object.keys(property).map((key) => {
        const resolved = resolveProp<T>(prefix, property[key]);
        if (key === "base") return resolved;
        return resolved ? `${key}:${resolved}` : "";
      })
    );
  }

  return resolveProp<T>(prefix, property);
}

const resolver = {
  /** Layout */
  container: (prop) => resolve("container", prop),
  boxSizing: (prop) => resolve("box", prop),
  display: (prop) => resolve("", prop),
  float: (prop) => resolve("float", prop),
  clear: (prop) => resolve("clear", prop),
  objectFit: (prop) => resolve("object", prop),
  objectPosition: (prop) => resolve("object", prop),
  overflow: (prop) => resolve("overflow", prop),
  overflowX: (prop) => resolve("overflow-x", prop),
  overflowY: (prop) => resolve("overflow-y", prop),
  overscroll: (prop) => resolve("overscroll", prop),
  overscrollX: (prop) => resolve("overscroll-x", prop),
  overscrollY: (prop) => resolve("overscroll-y", prop),
  position: (prop) => resolve("", prop),
  top: (prop) => resolve("top", prop),
  left: (prop) => resolve("left", prop),
  bottom: (prop) => resolve("bottom", prop),
  right: (prop) => resolve("right", prop),
  inset: (prop) => resolve("inset", prop),
  insetX: (prop) => resolve("inset-x", prop),
  insetY: (prop) => resolve("inset-y", prop),
  visible: (prop) => resolve("visible", prop),
  invisible: (prop) => resolve("invisible", prop),
  zIndex: (prop) => resolve("z", prop),

  /** Flex */
  flexDirection: (prop) => resolve("flex", prop),
  flexWrap: (prop) => resolve("flex", prop),
  flex: (prop) => resolve("flex", prop),
  flexGrow: (prop) => resolve("flex-grow", prop),
  flexShrink: (prop) => resolve("flex-shrink", prop),
  order: (prop) => resolve("order", prop),

  /** Grid */
  gridTemplateCols: (prop) => resolve("grid-cols", prop),
  gridTemplateRows: (prop) => resolve("grid-rows", prop),
  gridCols: (prop) => resolve("col", prop),
  gridRow: (prop) => resolve("row", prop),
  gridFlow: (prop) => resolve("grid-flow", prop),
  autoCols: (prop) => resolve("auto-cols", prop),
  autoRows: (prop) => resolve("auto-rows", prop),
  gap: (prop) => resolve("gap", prop),
  gapX: (prop) => resolve("gap-x", prop),
  gapY: (prop) => resolve("gap-y", prop),

  /** Box Alignment */
  justifyContent: (prop) => resolve("justify", prop),
  justifyItems: (prop) => resolve("justify-items", prop),
  justifySelf: (prop) => resolve("justify-self", prop),
  alignContent: (prop) => resolve("content", prop),
  alignItems: (prop) => resolve("items", prop),
  alignSelf: (prop) => resolve("self", prop),
  placeContent: (prop) => resolve("place-content", prop),
  placeItems: (prop) => resolve("place-items", prop),
  placeSelf: (prop) => resolve("place-self", prop),

  /** Spacing */
  p: (prop) => resolve("p", prop),
  px: (prop) => resolve("px", prop),
  py: (prop) => resolve("py", prop),
  pt: (prop) => resolve("pt", prop),
  pb: (prop) => resolve("pb", prop),
  pr: (prop) => resolve("pr", prop),
  pl: (prop) => resolve("pl", prop),
  m: (prop) => resolve("m", prop),
  mx: (prop) => resolve("mx", prop),
  my: (prop) => resolve("my", prop),
  mt: (prop) => resolve("mt", prop),
  mb: (prop) => resolve("mb", prop),
  mr: (prop) => resolve("mr", prop),
  ml: (prop) => resolve("ml", prop),
  spaceX: (prop) => resolve("space-x", prop),
  spaceY: (prop) => resolve("space-y", prop),

  /** Sizing */
  w: (prop) => resolve("w", prop),
  minW: (prop) => resolve("min-w", prop),
  maxW: (prop) => resolve("max-w", prop),
  h: (prop) => resolve("h", prop),
  minH: (prop) => resolve("min-h", prop),
  maxH: (prop) => resolve("max-h", prop),

  /** Typography */
  font: (prop) => resolve("font", prop),
  fontSize: (prop) => resolve("text", prop),
  italic: (prop) => resolve("italic", prop),
  nonItalic: (prop) => resolve("not-italic", prop),
  antialiased: (prop) => resolve("antialiased", prop),
  subpixelAntialiased: (prop) => resolve("subpixel-antialiased", prop),
  fontWeight: (prop) => resolve("font", prop),
  fontVariantNumeric: (prop) => resolve("", prop),
  tracking: (prop) => resolve("tracking", prop),
  leading: (prop) => resolve("leading", prop),
  listStyle: (prop) => resolve("list", prop),
  listPosition: (prop) => resolve("list", prop),
  placeholderColor: (prop) => resolve("placeholder", prop),
  placeholderOpacity: (prop) => resolve("placeholder-opacity", prop),
  textAlign: (prop) => resolve("text", prop),
  textColor: (prop) => resolve("text", prop),
  textOpacity: (prop) => resolve("text-opacity", prop),
  textOverflow: (prop) => resolve("overflow", prop),
  underline: (prop) => resolve("underline", prop),
  lineThrough: (prop) => resolve("line-through", prop),
  noUnderline: (prop) => resolve("no-underline", prop),
  uppercase: (prop) => resolve("uppercase", prop),
  lowercase: (prop) => resolve("lowercase", prop),
  capitalize: (prop) => resolve("capitalize", prop),
  normalCase: (prop) => resolve("normal-case", prop),
  truncate: (prop) => resolve("truncate", prop),
  align: (prop) => resolve("align", prop),
  whitespace: (prop) => resolve("whitespace", prop),
  break: (prop) => resolve("break", prop),

  /** Backgrounds */
  bgAttachment: (prop) => resolve("bg", prop),
  bgClip: (prop) => resolve("bg-clip", prop),
  bgColor: (prop) => resolve("bg", prop),
  bgOpacity: (prop) => resolve("bg-opacity", prop),
  bgPosition: (prop) => resolve("bg", prop),
  bgRepeat: (prop) => resolve("bg", prop),
  bgSize: (prop) => resolve("bg", prop),
  bgImage: (prop) => resolve("bg", prop),
  gradientFrom: (prop) => resolve("from", prop),
  gradientVia: (prop) => resolve("via", prop),
  gradientTo: (prop) => resolve("to", prop),

  /** Borders */
  rounded: (prop) => resolve("rounded", prop),
  roundedT: (prop) => resolve("rounded-t", prop),
  roundedB: (prop) => resolve("rounded-b", prop),
  roundedL: (prop) => resolve("rounded-l", prop),
  roundedR: (prop) => resolve("rounded-r", prop),
  roundedTl: (prop) => resolve("rounded-tl", prop),
  roundedTr: (prop) => resolve("rounded-tr", prop),
  roundedBl: (prop) => resolve("rounded-bl", prop),
  roundedBr: (prop) => resolve("rounded-br", prop),
  border: (prop) => resolve("border", prop),
  borderT: (prop) => resolve("border-t", prop),
  borderB: (prop) => resolve("border-b", prop),
  borderL: (prop) => resolve("border-l", prop),
  borderR: (prop) => resolve("border-r", prop),
  borderColor: (prop) => resolve("border", prop),
  borderOpacity: (prop) => resolve("border-opacity", prop),
  borderStyle: (prop) => resolve("border", prop),
  divideX: (prop) => resolve("divide-x", prop),
  divideY: (prop) => resolve("divide-y", prop),
  divideColor: (prop) => resolve("divide", prop),
  divideOpacity: (prop) => resolve("divide-opacity", prop),
  divideStyle: (prop) => resolve("divide", prop),
  ring: (prop) => resolve("ring", prop),
  ringColor: (prop) => resolve("ring", prop),
  ringOpacity: (prop) => resolve("ring-opacity", prop),
  ringOffsetWidth: (prop) => resolve("ring-offset", prop),
  ringOffsetColor: (prop) => resolve("ring-offset", prop),

  /** Effects */
  shadow: (prop) => resolve("shadow", prop),
  opacity: (prop) => resolve("opacity", prop),

  /** Tables */
  borderCollapse: (prop) => resolve("border", prop),
  table: (prop) => resolve("table", prop),

  /** Transitions and Animations */
  transition: (prop) => resolve("transition", prop),
  duration: (prop) => resolve("duration", prop),
  ease: (prop) => resolve("ease", prop),
  delay: (prop) => resolve("delay", prop),
  animate: (prop) => resolve("animate", prop),

  /** Transforms */
  transform: (prop) => resolve("transform", prop),
  origin: (prop) => resolve("origin", prop),
  scale: (prop) => resolve("scale", prop),
  scaleX: (prop) => resolve("scale-x", prop),
  scaleY: (prop) => resolve("scale-y", prop),
  rotate: (prop) => resolve("rotate", prop),
  translateX: (prop) => resolve("translate-x", prop),
  translateY: (prop) => resolve("translate-y", prop),
  skewX: (prop) => resolve("skew-x", prop),
  skewY: (prop) => resolve("skew-y", prop),
};

export function resolveTailwindProps(props: TailwindProps) {
  return clean(
    Object.keys(props).map((key) => {
      const resolveFn = resolver[key];
      return resolveFn ? resolveFn(props[key]) : "";
    })
  );
}
