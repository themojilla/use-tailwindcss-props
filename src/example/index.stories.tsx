import React from "react";
import { TailwindProps, useTailwindProps } from "..";
import { storiesOf } from "@storybook/react";

interface ButtonProps extends TailwindProps {}

const Button: React.FC<ButtonProps> = (props) => {
  const className = useTailwindProps(props);
  return <button className={className}>{props.children}</button>;
};

storiesOf("example", module).add("button", () => (
  <Button
    px="6"
    py="3"
    rounded="md"
    display="inline-flex"
    border
    borderColor="transparent"
    items="center"
    textSize="base"
    fontWeight="medium"
    textColor="indigo-600"
    _hover={{
      bgColor: "indigo-50",
    }}
  >
    Click Me
  </Button>
));
