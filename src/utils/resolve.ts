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
  textColor: (prop) => resolve("text", prop),
};

export function resolveTailwindProps(props: TailwindProps) {
  return clean(
    Object.keys(props).map((key) => {
      const resolveFn = resolver[key];
      return resolveFn ? resolveFn(props[key]) : "";
    })
  );
}
