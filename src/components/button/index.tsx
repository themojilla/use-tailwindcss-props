import React, { useRef } from "react";
import { useButton } from "@react-aria/button";
import { useHover } from "@react-aria/interactions";
import { mergeProps } from "@react-aria/utils";
import { ButtonProps } from "../../types/button";
import { resolveTailwindProps } from "../../utils/resolve";

function _Button(props: ButtonProps, ref?: React.RefObject<HTMLButtonElement>) {
  const { children, hoverStyle, pressStyle } = props;
  ref ?? useRef<HTMLButtonElement>();
  const { hoverProps, isHovered } = useHover(props);
  const { buttonProps, isPressed } = useButton(props, ref);
  const className = resolveTailwindProps({
    ...props,
    ...(isHovered ? hoverStyle : {}),
    ...(isPressed ? pressStyle : {}),
  });
  return (
    <button
      className={className}
      ref={ref}
      {...mergeProps(hoverProps, buttonProps)}
    >
      {children}
    </button>
  );
}

export const Button = React.forwardRef(
  (props: ButtonProps, ref?: React.RefObject<HTMLButtonElement>) =>
    _Button(props, ref)
);
