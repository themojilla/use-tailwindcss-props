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
};

export function resolveTailwindProps(props: TailwindProps) {
  return clean(Object.keys(props).map((key) => resolver[key](props[key])));
}
