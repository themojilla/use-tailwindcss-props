/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var RESPONSIVE_ARRAY = ["sm", "md", "lg", "xl", "2xl"];
function isNegative(property) {
    return property[0] === "-";
}
function clean(array) {
    return array.filter(function (str) { return !!str; }).join(" ");
}
function resolveProp(prefix, property, pseudo) {
    if (typeof property === "boolean") {
        return "" + pseudo + prefix;
    }
    if (typeof property === "string") {
        return isNegative(property)
            ? pseudo + "-" + prefix + property
            : !!prefix
                ? "" + pseudo + prefix + "-" + property
                : "" + pseudo + prefix + property;
    }
    return "";
}
function resolveResponsive(prefix, property, pseudo) {
    if (Array.isArray(property)) {
        return clean(property.map(function (prop, index) {
            var resolved = resolveProp(prefix, prop, pseudo);
            return resolved ? RESPONSIVE_ARRAY[index] + ":" + resolved : "";
        }));
    }
    if (typeof property === "object") {
        return clean(Object.keys(property).map(function (key) {
            var resolved = resolveProp(prefix, property[key], pseudo);
            if (key === "base")
                return resolved;
            return resolved ? key + ":" + resolved : "";
        }));
    }
    return resolveProp(prefix, property, pseudo);
}
function resolverFactory(resolve, pseudo) {
    if (pseudo === void 0) { pseudo = ""; }
    return {
        /** Layout */
        container: function (prop) { return resolve("container", prop, pseudo); },
        boxSizing: function (prop) { return resolve("box", prop, pseudo); },
        display: function (prop) { return resolve("", prop, pseudo); },
        float: function (prop) { return resolve("float", prop, pseudo); },
        clear: function (prop) { return resolve("clear", prop, pseudo); },
        objectFit: function (prop) { return resolve("object", prop, pseudo); },
        objectPosition: function (prop) { return resolve("object", prop, pseudo); },
        overflow: function (prop) { return resolve("overflow", prop, pseudo); },
        overflowX: function (prop) { return resolve("overflow-x", prop, pseudo); },
        overflowY: function (prop) { return resolve("overflow-y", prop, pseudo); },
        overscroll: function (prop) { return resolve("overscroll", prop, pseudo); },
        overscrollX: function (prop) { return resolve("overscroll-x", prop, pseudo); },
        overscrollY: function (prop) { return resolve("overscroll-y", prop, pseudo); },
        position: function (prop) { return resolve("", prop, pseudo); },
        top: function (prop) { return resolve("top", prop, pseudo); },
        left: function (prop) { return resolve("left", prop, pseudo); },
        bottom: function (prop) { return resolve("bottom", prop, pseudo); },
        right: function (prop) { return resolve("right", prop, pseudo); },
        inset: function (prop) { return resolve("inset", prop, pseudo); },
        insetX: function (prop) { return resolve("inset-x", prop, pseudo); },
        insetY: function (prop) { return resolve("inset-y", prop, pseudo); },
        visible: function (prop) { return resolve("visible", prop, pseudo); },
        invisible: function (prop) { return resolve("invisible", prop, pseudo); },
        zIndex: function (prop) { return resolve("z", prop, pseudo); },
        /** Flex */
        flexDirection: function (prop) { return resolve("flex", prop, pseudo); },
        flexWrap: function (prop) { return resolve("flex", prop, pseudo); },
        flex: function (prop) { return resolve("flex", prop, pseudo); },
        flexGrow: function (prop) { return resolve("flex-grow", prop, pseudo); },
        flexShrink: function (prop) { return resolve("flex-shrink", prop, pseudo); },
        order: function (prop) { return resolve("order", prop, pseudo); },
        /** Grid */
        gridTemplateCols: function (prop) { return resolve("grid-cols", prop, pseudo); },
        gridTemplateRows: function (prop) { return resolve("grid-rows", prop, pseudo); },
        gridCols: function (prop) { return resolve("col", prop, pseudo); },
        gridRow: function (prop) { return resolve("row", prop, pseudo); },
        gridFlow: function (prop) { return resolve("grid-flow", prop, pseudo); },
        autoCols: function (prop) { return resolve("auto-cols", prop, pseudo); },
        autoRows: function (prop) { return resolve("auto-rows", prop, pseudo); },
        gap: function (prop) { return resolve("gap", prop, pseudo); },
        gapX: function (prop) { return resolve("gap-x", prop, pseudo); },
        gapY: function (prop) { return resolve("gap-y", prop, pseudo); },
        /** Box Alignment */
        justifyContent: function (prop) { return resolve("justify", prop, pseudo); },
        justifyItems: function (prop) { return resolve("justify-items", prop, pseudo); },
        justifySelf: function (prop) { return resolve("justify-self", prop, pseudo); },
        alignContent: function (prop) { return resolve("content", prop, pseudo); },
        items: function (prop) { return resolve("items", prop, pseudo); },
        self: function (prop) { return resolve("self", prop, pseudo); },
        placeContent: function (prop) { return resolve("place-content", prop, pseudo); },
        placeItems: function (prop) { return resolve("place-items", prop, pseudo); },
        placeSelf: function (prop) { return resolve("place-self", prop, pseudo); },
        /** Spacing */
        p: function (prop) { return resolve("p", prop, pseudo); },
        px: function (prop) { return resolve("px", prop, pseudo); },
        py: function (prop) { return resolve("py", prop, pseudo); },
        pt: function (prop) { return resolve("pt", prop, pseudo); },
        pb: function (prop) { return resolve("pb", prop, pseudo); },
        pr: function (prop) { return resolve("pr", prop, pseudo); },
        pl: function (prop) { return resolve("pl", prop, pseudo); },
        m: function (prop) { return resolve("m", prop, pseudo); },
        mx: function (prop) { return resolve("mx", prop, pseudo); },
        my: function (prop) { return resolve("my", prop, pseudo); },
        mt: function (prop) { return resolve("mt", prop, pseudo); },
        mb: function (prop) { return resolve("mb", prop, pseudo); },
        mr: function (prop) { return resolve("mr", prop, pseudo); },
        ml: function (prop) { return resolve("ml", prop, pseudo); },
        spaceX: function (prop) { return resolve("space-x", prop, pseudo); },
        spaceY: function (prop) { return resolve("space-y", prop, pseudo); },
        /** Sizing */
        w: function (prop) { return resolve("w", prop, pseudo); },
        minW: function (prop) { return resolve("min-w", prop, pseudo); },
        maxW: function (prop) { return resolve("max-w", prop, pseudo); },
        h: function (prop) { return resolve("h", prop, pseudo); },
        minH: function (prop) { return resolve("min-h", prop, pseudo); },
        maxH: function (prop) { return resolve("max-h", prop, pseudo); },
        /** Typography */
        font: function (prop) { return resolve("font", prop, pseudo); },
        textSize: function (prop) { return resolve("text", prop, pseudo); },
        italic: function (prop) { return resolve("italic", prop, pseudo); },
        nonItalic: function (prop) { return resolve("not-italic", prop, pseudo); },
        antialiased: function (prop) { return resolve("antialiased", prop, pseudo); },
        subpixelAntialiased: function (prop) {
            return resolve("subpixel-antialiased", prop, pseudo);
        },
        fontWeight: function (prop) { return resolve("font", prop, pseudo); },
        fontVariantNumeric: function (prop) { return resolve("", prop, pseudo); },
        tracking: function (prop) { return resolve("tracking", prop, pseudo); },
        leading: function (prop) { return resolve("leading", prop, pseudo); },
        listStyle: function (prop) { return resolve("list", prop, pseudo); },
        listPosition: function (prop) { return resolve("list", prop, pseudo); },
        placeholderColor: function (prop) { return resolve("placeholder", prop, pseudo); },
        placeholderOpacity: function (prop) { return resolve("placeholder-opacity", prop, pseudo); },
        textAlign: function (prop) { return resolve("text", prop, pseudo); },
        textColor: function (prop) { return resolve("text", prop, pseudo); },
        textOpacity: function (prop) { return resolve("text-opacity", prop, pseudo); },
        textOverflow: function (prop) { return resolve("overflow", prop, pseudo); },
        underline: function (prop) { return resolve("underline", prop, pseudo); },
        lineThrough: function (prop) { return resolve("line-through", prop, pseudo); },
        noUnderline: function (prop) { return resolve("no-underline", prop, pseudo); },
        uppercase: function (prop) { return resolve("uppercase", prop, pseudo); },
        lowercase: function (prop) { return resolve("lowercase", prop, pseudo); },
        capitalize: function (prop) { return resolve("capitalize", prop, pseudo); },
        normalCase: function (prop) { return resolve("normal-case", prop, pseudo); },
        truncate: function (prop) { return resolve("truncate", prop, pseudo); },
        align: function (prop) { return resolve("align", prop, pseudo); },
        whitespace: function (prop) { return resolve("whitespace", prop, pseudo); },
        break: function (prop) { return resolve("break", prop, pseudo); },
        /** Backgrounds */
        bgAttachment: function (prop) { return resolve("bg", prop, pseudo); },
        bgClip: function (prop) { return resolve("bg-clip", prop, pseudo); },
        bgColor: function (prop) { return resolve("bg", prop, pseudo); },
        bgOpacity: function (prop) { return resolve("bg-opacity", prop, pseudo); },
        bgPosition: function (prop) { return resolve("bg", prop, pseudo); },
        bgRepeat: function (prop) { return resolve("bg", prop, pseudo); },
        bgSize: function (prop) { return resolve("bg", prop, pseudo); },
        bgImage: function (prop) { return resolve("bg", prop, pseudo); },
        gradientFrom: function (prop) { return resolve("from", prop, pseudo); },
        gradientVia: function (prop) { return resolve("via", prop, pseudo); },
        gradientTo: function (prop) { return resolve("to", prop, pseudo); },
        /** Borders */
        rounded: function (prop) { return resolve("rounded", prop, pseudo); },
        roundedT: function (prop) { return resolve("rounded-t", prop, pseudo); },
        roundedB: function (prop) { return resolve("rounded-b", prop, pseudo); },
        roundedL: function (prop) { return resolve("rounded-l", prop, pseudo); },
        roundedR: function (prop) { return resolve("rounded-r", prop, pseudo); },
        roundedTl: function (prop) { return resolve("rounded-tl", prop, pseudo); },
        roundedTr: function (prop) { return resolve("rounded-tr", prop, pseudo); },
        roundedBl: function (prop) { return resolve("rounded-bl", prop, pseudo); },
        roundedBr: function (prop) { return resolve("rounded-br", prop, pseudo); },
        border: function (prop) { return resolve("border", prop, pseudo); },
        borderT: function (prop) { return resolve("border-t", prop, pseudo); },
        borderB: function (prop) { return resolve("border-b", prop, pseudo); },
        borderL: function (prop) { return resolve("border-l", prop, pseudo); },
        borderR: function (prop) { return resolve("border-r", prop, pseudo); },
        borderColor: function (prop) { return resolve("border", prop, pseudo); },
        borderOpacity: function (prop) { return resolve("border-opacity", prop, pseudo); },
        borderStyle: function (prop) { return resolve("border", prop, pseudo); },
        divideX: function (prop) { return resolve("divide-x", prop, pseudo); },
        divideY: function (prop) { return resolve("divide-y", prop, pseudo); },
        divideColor: function (prop) { return resolve("divide", prop, pseudo); },
        divideOpacity: function (prop) { return resolve("divide-opacity", prop, pseudo); },
        divideStyle: function (prop) { return resolve("divide", prop, pseudo); },
        ring: function (prop) { return resolve("ring", prop, pseudo); },
        ringColor: function (prop) { return resolve("ring", prop, pseudo); },
        ringOpacity: function (prop) { return resolve("ring-opacity", prop, pseudo); },
        ringOffset: function (prop) { return resolve("ring-offset", prop, pseudo); },
        ringOffsetColor: function (prop) { return resolve("ring-offset", prop, pseudo); },
        /** Effects */
        shadow: function (prop) { return resolve("shadow", prop, pseudo); },
        opacity: function (prop) { return resolve("opacity", prop, pseudo); },
        /** Tables */
        borderCollapse: function (prop) { return resolve("border", prop, pseudo); },
        table: function (prop) { return resolve("table", prop, pseudo); },
        /** Transitions and Animations */
        transition: function (prop) { return resolve("transition", prop, pseudo); },
        duration: function (prop) { return resolve("duration", prop, pseudo); },
        ease: function (prop) { return resolve("ease", prop, pseudo); },
        delay: function (prop) { return resolve("delay", prop, pseudo); },
        animate: function (prop) { return resolve("animate", prop, pseudo); },
        /** Transforms */
        transform: function (prop) { return resolve("transform", prop, pseudo); },
        origin: function (prop) { return resolve("origin", prop, pseudo); },
        scale: function (prop) { return resolve("scale", prop, pseudo); },
        scaleX: function (prop) { return resolve("scale-x", prop, pseudo); },
        scaleY: function (prop) { return resolve("scale-y", prop, pseudo); },
        rotate: function (prop) { return resolve("rotate", prop, pseudo); },
        translateX: function (prop) { return resolve("translate-x", prop, pseudo); },
        translateY: function (prop) { return resolve("translate-y", prop, pseudo); },
        skewX: function (prop) { return resolve("skew-x", prop, pseudo); },
        skewY: function (prop) { return resolve("skew-y", prop, pseudo); },
        /** Interactivity */
        appearanceNone: function (prop) { return resolve("appearance-none", prop, pseudo); },
        cursor: function (prop) { return resolve("cursor", prop, pseudo); },
        outline: function (prop) { return resolve("outline", prop, pseudo); },
        pointerEvents: function (prop) { return resolve("pointer-events", prop, pseudo); },
        resize: function (prop) { return resolve("resize", prop, pseudo); },
        select: function (prop) { return resolve("select", prop, pseudo); },
        /** SVG */
        fillCurrent: function (prop) { return resolve("fill-current", prop, pseudo); },
        strokeCurrent: function (prop) { return resolve("stroke-current", prop, pseudo); },
        stroke: function (prop) { return resolve("stroke", prop, pseudo); },
        /** Screen Readers */
        srOnly: function (prop) { return resolve("sr-only", prop, pseudo); },
        notSrOnly: function (prop) { return resolve("not-sr-only", prop, pseudo); },
    };
}
var tailwindResolver = __assign(__assign({}, resolverFactory(resolveResponsive)), { _sm: resolverFactory(resolveProp, "sm:"), _md: resolverFactory(resolveProp, "md:"), _lg: resolverFactory(resolveProp, "lg:"), _xl: resolverFactory(resolveProp, "xl:"), _2xl: resolverFactory(resolveProp, "2xl:"), _first: resolverFactory(resolveResponsive, "first:"), _last: resolverFactory(resolveResponsive, "last:"), _odd: resolverFactory(resolveResponsive, "odd:"), _even: resolverFactory(resolveResponsive, "even:"), _visited: resolverFactory(resolveResponsive, "visited:"), _checked: resolverFactory(resolveResponsive, "checked:"), _groupHover: resolverFactory(resolveResponsive, "group-hover:"), _groupFocus: resolverFactory(resolveResponsive, "group-focus:"), _focusWithin: resolverFactory(resolveResponsive, "focus-within:"), _hover: resolverFactory(resolveResponsive, "hover:"), _focus: resolverFactory(resolveResponsive, "focus:"), _focusVisible: resolverFactory(resolveResponsive, "focus-visible:"), _active: resolverFactory(resolveResponsive, "active:"), _disabled: resolverFactory(resolveResponsive, "disabled:") });
function useTailwindProps(props) {
    return clean(resolveFunction(props, tailwindResolver).flat());
}
function resolveFunction(props, resolver) {
    if (resolver === void 0) { resolver = tailwindResolver; }
    return Object.keys(props).map(function (key) {
        var resolve = resolver[key];
        if (!resolve) {
            return "";
        }
        if (typeof resolve === "function") {
            return resolve(props[key]);
        }
        else {
            return resolveFunction(props[key], resolve);
        }
    });
}

export { useTailwindProps };
//# sourceMappingURL=index.es.js.map
