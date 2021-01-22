import { TailwindProps } from "../types";

type Resolve<T> = (prefix: string, property: T, pseudo: string) => string;

const RESPONSIVE_ARRAY = ["sm", "md", "lg", "xl", "2xl"];

function isNegative(property: string) {
  return property[0] === "-";
}

function clean(array: string[]) {
  return array.filter((str) => !!str).join(" ");
}

function resolveProp<T>(prefix: string, property: T, pseudo: string) {
  if (typeof property === "boolean") {
    return `${pseudo}${prefix}`;
  }
  if (typeof property === "string") {
    return isNegative(property)
      ? `${pseudo}-${prefix}${property}`
      : !!prefix
      ? `${pseudo}${prefix}-${property}`
      : `${pseudo}${prefix}${property}`;
  }
  return "";
}

function resolveResponsive<T>(prefix: string, property: T, pseudo: string) {
  if (Array.isArray(property)) {
    return clean(
      (property as any[]).map((prop, index) => {
        const resolved = resolveProp<T>(prefix, prop, pseudo);
        return resolved ? `${RESPONSIVE_ARRAY[index]}:${resolved}` : "";
      })
    );
  }

  if (typeof property === "object") {
    return clean(
      Object.keys(property).map((key) => {
        const resolved = resolveProp<T>(prefix, property[key], pseudo);
        if (key === "base") return resolved;
        return resolved ? `${key}:${resolved}` : "";
      })
    );
  }

  return resolveProp<T>(prefix, property, pseudo);
}

function resolverFactory<T>(resolve: Resolve<T>, pseudo: string = "") {
  return {
    /** Layout */
    container: (prop) => resolve("container", prop, pseudo),
    boxSizing: (prop) => resolve("box", prop, pseudo),
    display: (prop) => resolve("", prop, pseudo),
    float: (prop) => resolve("float", prop, pseudo),
    clear: (prop) => resolve("clear", prop, pseudo),
    objectFit: (prop) => resolve("object", prop, pseudo),
    objectPosition: (prop) => resolve("object", prop, pseudo),
    overflow: (prop) => resolve("overflow", prop, pseudo),
    overflowX: (prop) => resolve("overflow-x", prop, pseudo),
    overflowY: (prop) => resolve("overflow-y", prop, pseudo),
    overscroll: (prop) => resolve("overscroll", prop, pseudo),
    overscrollX: (prop) => resolve("overscroll-x", prop, pseudo),
    overscrollY: (prop) => resolve("overscroll-y", prop, pseudo),
    position: (prop) => resolve("", prop, pseudo),
    top: (prop) => resolve("top", prop, pseudo),
    left: (prop) => resolve("left", prop, pseudo),
    bottom: (prop) => resolve("bottom", prop, pseudo),
    right: (prop) => resolve("right", prop, pseudo),
    inset: (prop) => resolve("inset", prop, pseudo),
    insetX: (prop) => resolve("inset-x", prop, pseudo),
    insetY: (prop) => resolve("inset-y", prop, pseudo),
    visible: (prop) => resolve("visible", prop, pseudo),
    invisible: (prop) => resolve("invisible", prop, pseudo),
    zIndex: (prop) => resolve("z", prop, pseudo),

    /** Flex */
    flexDirection: (prop) => resolve("flex", prop, pseudo),
    flexWrap: (prop) => resolve("flex", prop, pseudo),
    flex: (prop) => resolve("flex", prop, pseudo),
    flexGrow: (prop) => resolve("flex-grow", prop, pseudo),
    flexShrink: (prop) => resolve("flex-shrink", prop, pseudo),
    order: (prop) => resolve("order", prop, pseudo),

    /** Grid */
    gridTemplateCols: (prop) => resolve("grid-cols", prop, pseudo),
    gridTemplateRows: (prop) => resolve("grid-rows", prop, pseudo),
    gridCols: (prop) => resolve("col", prop, pseudo),
    gridRow: (prop) => resolve("row", prop, pseudo),
    gridFlow: (prop) => resolve("grid-flow", prop, pseudo),
    autoCols: (prop) => resolve("auto-cols", prop, pseudo),
    autoRows: (prop) => resolve("auto-rows", prop, pseudo),
    gap: (prop) => resolve("gap", prop, pseudo),
    gapX: (prop) => resolve("gap-x", prop, pseudo),
    gapY: (prop) => resolve("gap-y", prop, pseudo),

    /** Box Alignment */
    justifyContent: (prop) => resolve("justify", prop, pseudo),
    justifyItems: (prop) => resolve("justify-items", prop, pseudo),
    justifySelf: (prop) => resolve("justify-self", prop, pseudo),
    alignContent: (prop) => resolve("content", prop, pseudo),
    items: (prop) => resolve("items", prop, pseudo),
    self: (prop) => resolve("self", prop, pseudo),
    placeContent: (prop) => resolve("place-content", prop, pseudo),
    placeItems: (prop) => resolve("place-items", prop, pseudo),
    placeSelf: (prop) => resolve("place-self", prop, pseudo),

    /** Spacing */
    p: (prop) => resolve("p", prop, pseudo),
    px: (prop) => resolve("px", prop, pseudo),
    py: (prop) => resolve("py", prop, pseudo),
    pt: (prop) => resolve("pt", prop, pseudo),
    pb: (prop) => resolve("pb", prop, pseudo),
    pr: (prop) => resolve("pr", prop, pseudo),
    pl: (prop) => resolve("pl", prop, pseudo),
    m: (prop) => resolve("m", prop, pseudo),
    mx: (prop) => resolve("mx", prop, pseudo),
    my: (prop) => resolve("my", prop, pseudo),
    mt: (prop) => resolve("mt", prop, pseudo),
    mb: (prop) => resolve("mb", prop, pseudo),
    mr: (prop) => resolve("mr", prop, pseudo),
    ml: (prop) => resolve("ml", prop, pseudo),
    spaceX: (prop) => resolve("space-x", prop, pseudo),
    spaceY: (prop) => resolve("space-y", prop, pseudo),

    /** Sizing */
    w: (prop) => resolve("w", prop, pseudo),
    minW: (prop) => resolve("min-w", prop, pseudo),
    maxW: (prop) => resolve("max-w", prop, pseudo),
    h: (prop) => resolve("h", prop, pseudo),
    minH: (prop) => resolve("min-h", prop, pseudo),
    maxH: (prop) => resolve("max-h", prop, pseudo),

    /** Typography */
    font: (prop) => resolve("font", prop, pseudo),
    textSize: (prop) => resolve("text", prop, pseudo),
    italic: (prop) => resolve("italic", prop, pseudo),
    nonItalic: (prop) => resolve("not-italic", prop, pseudo),
    antialiased: (prop) => resolve("antialiased", prop, pseudo),
    subpixelAntialiased: (prop) =>
      resolve("subpixel-antialiased", prop, pseudo),
    fontWeight: (prop) => resolve("font", prop, pseudo),
    fontVariantNumeric: (prop) => resolve("", prop, pseudo),
    tracking: (prop) => resolve("tracking", prop, pseudo),
    leading: (prop) => resolve("leading", prop, pseudo),
    listStyle: (prop) => resolve("list", prop, pseudo),
    listPosition: (prop) => resolve("list", prop, pseudo),
    placeholderColor: (prop) => resolve("placeholder", prop, pseudo),
    placeholderOpacity: (prop) => resolve("placeholder-opacity", prop, pseudo),
    textAlign: (prop) => resolve("text", prop, pseudo),
    textColor: (prop) => resolve("text", prop, pseudo),
    textOpacity: (prop) => resolve("text-opacity", prop, pseudo),
    textOverflow: (prop) => resolve("overflow", prop, pseudo),
    underline: (prop) => resolve("underline", prop, pseudo),
    lineThrough: (prop) => resolve("line-through", prop, pseudo),
    noUnderline: (prop) => resolve("no-underline", prop, pseudo),
    uppercase: (prop) => resolve("uppercase", prop, pseudo),
    lowercase: (prop) => resolve("lowercase", prop, pseudo),
    capitalize: (prop) => resolve("capitalize", prop, pseudo),
    normalCase: (prop) => resolve("normal-case", prop, pseudo),
    truncate: (prop) => resolve("truncate", prop, pseudo),
    align: (prop) => resolve("align", prop, pseudo),
    whitespace: (prop) => resolve("whitespace", prop, pseudo),
    break: (prop) => resolve("break", prop, pseudo),

    /** Backgrounds */
    bgAttachment: (prop) => resolve("bg", prop, pseudo),
    bgClip: (prop) => resolve("bg-clip", prop, pseudo),
    bgColor: (prop) => resolve("bg", prop, pseudo),
    bgOpacity: (prop) => resolve("bg-opacity", prop, pseudo),
    bgPosition: (prop) => resolve("bg", prop, pseudo),
    bgRepeat: (prop) => resolve("bg", prop, pseudo),
    bgSize: (prop) => resolve("bg", prop, pseudo),
    bgImage: (prop) => resolve("bg", prop, pseudo),
    gradientFrom: (prop) => resolve("from", prop, pseudo),
    gradientVia: (prop) => resolve("via", prop, pseudo),
    gradientTo: (prop) => resolve("to", prop, pseudo),

    /** Borders */
    rounded: (prop) => resolve("rounded", prop, pseudo),
    roundedT: (prop) => resolve("rounded-t", prop, pseudo),
    roundedB: (prop) => resolve("rounded-b", prop, pseudo),
    roundedL: (prop) => resolve("rounded-l", prop, pseudo),
    roundedR: (prop) => resolve("rounded-r", prop, pseudo),
    roundedTl: (prop) => resolve("rounded-tl", prop, pseudo),
    roundedTr: (prop) => resolve("rounded-tr", prop, pseudo),
    roundedBl: (prop) => resolve("rounded-bl", prop, pseudo),
    roundedBr: (prop) => resolve("rounded-br", prop, pseudo),
    border: (prop) => resolve("border", prop, pseudo),
    borderT: (prop) => resolve("border-t", prop, pseudo),
    borderB: (prop) => resolve("border-b", prop, pseudo),
    borderL: (prop) => resolve("border-l", prop, pseudo),
    borderR: (prop) => resolve("border-r", prop, pseudo),
    borderColor: (prop) => resolve("border", prop, pseudo),
    borderOpacity: (prop) => resolve("border-opacity", prop, pseudo),
    borderStyle: (prop) => resolve("border", prop, pseudo),
    divideX: (prop) => resolve("divide-x", prop, pseudo),
    divideY: (prop) => resolve("divide-y", prop, pseudo),
    divideColor: (prop) => resolve("divide", prop, pseudo),
    divideOpacity: (prop) => resolve("divide-opacity", prop, pseudo),
    divideStyle: (prop) => resolve("divide", prop, pseudo),
    ring: (prop) => resolve("ring", prop, pseudo),
    ringColor: (prop) => resolve("ring", prop, pseudo),
    ringOpacity: (prop) => resolve("ring-opacity", prop, pseudo),
    ringOffset: (prop) => resolve("ring-offset", prop, pseudo),
    ringOffsetColor: (prop) => resolve("ring-offset", prop, pseudo),

    /** Effects */
    shadow: (prop) => resolve("shadow", prop, pseudo),
    opacity: (prop) => resolve("opacity", prop, pseudo),

    /** Tables */
    borderCollapse: (prop) => resolve("border", prop, pseudo),
    table: (prop) => resolve("table", prop, pseudo),

    /** Transitions and Animations */
    transition: (prop) => resolve("transition", prop, pseudo),
    duration: (prop) => resolve("duration", prop, pseudo),
    ease: (prop) => resolve("ease", prop, pseudo),
    delay: (prop) => resolve("delay", prop, pseudo),
    animate: (prop) => resolve("animate", prop, pseudo),

    /** Transforms */
    transform: (prop) => resolve("transform", prop, pseudo),
    origin: (prop) => resolve("origin", prop, pseudo),
    scale: (prop) => resolve("scale", prop, pseudo),
    scaleX: (prop) => resolve("scale-x", prop, pseudo),
    scaleY: (prop) => resolve("scale-y", prop, pseudo),
    rotate: (prop) => resolve("rotate", prop, pseudo),
    translateX: (prop) => resolve("translate-x", prop, pseudo),
    translateY: (prop) => resolve("translate-y", prop, pseudo),
    skewX: (prop) => resolve("skew-x", prop, pseudo),
    skewY: (prop) => resolve("skew-y", prop, pseudo),

    /** Interactivity */
    appearanceNone: (prop) => resolve("appearance-none", prop, pseudo),
    cursor: (prop) => resolve("cursor", prop, pseudo),
    outline: (prop) => resolve("outline", prop, pseudo),
    pointerEvents: (prop) => resolve("pointer-events", prop, pseudo),
    resize: (prop) => resolve("resize", prop, pseudo),
    select: (prop) => resolve("select", prop, pseudo),

    /** SVG */
    fillCurrent: (prop) => resolve("fill-current", prop, pseudo),
    strokeCurrent: (prop) => resolve("stroke-current", prop, pseudo),
    stroke: (prop) => resolve("stroke", prop, pseudo),

    /** Screen Readers */
    srOnly: (prop) => resolve("sr-only", prop, pseudo),
    notSrOnly: (prop) => resolve("not-sr-only", prop, pseudo),
  };
}

const tailwindResolver = {
  ...resolverFactory(resolveResponsive),
  _sm: resolverFactory(resolveProp, "sm:"),
  _md: resolverFactory(resolveProp, "md:"),
  _lg: resolverFactory(resolveProp, "lg:"),
  _xl: resolverFactory(resolveProp, "xl:"),
  _2xl: resolverFactory(resolveProp, "2xl:"),
  _first: resolverFactory(resolveResponsive, "first:"),
  _last: resolverFactory(resolveResponsive, "last:"),
  _odd: resolverFactory(resolveResponsive, "odd:"),
  _even: resolverFactory(resolveResponsive, "even:"),
  _visited: resolverFactory(resolveResponsive, "visited:"),
  _checked: resolverFactory(resolveResponsive, "checked:"),
  _groupHover: resolverFactory(resolveResponsive, "group-hover:"),
  _groupFocus: resolverFactory(resolveResponsive, "group-focus:"),
  _focusWithin: resolverFactory(resolveResponsive, "focus-within:"),
  _hover: resolverFactory(resolveResponsive, "hover:"),
  _focus: resolverFactory(resolveResponsive, "focus:"),
  _focusVisible: resolverFactory(resolveResponsive, "focus-visible:"),
  _active: resolverFactory(resolveResponsive, "active:"),
  _disabled: resolverFactory(resolveResponsive, "disabled:"),
};

export function useTailwindProps(props: TailwindProps) {
  return clean(resolveFunction(props, tailwindResolver).flat());
}

export function resolveFunction(props: any, resolver: any = tailwindResolver) {
  return Object.keys(props).map((key) => {
    const resolve = resolver[key];
    if (!resolve) {
      return "";
    }
    if (typeof resolve === "function") {
      return resolve(props[key]);
    } else {
      return resolveFunction(props[key], resolve);
    }
  });
}
