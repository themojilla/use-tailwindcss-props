import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from ".";

storiesOf("Button", module)
  .add("default", () => (
    <Button
      textColor="red-300"
      hoverStyle={{ textColor: "red-500" }}
      pressStyle={{ textColor: "red-700" }}
    >
      default
    </Button>
  ))
  .add("responsive", () => (
    <Button
      textColor={{
        base: "red-100",
        sm: "red-200",
        md: "red-300",
        lg: "red-400",
        xl: "red-500",
        "2xl": "red-600",
      }}
      onPress={action("pressed")}
    >
      responsive
    </Button>
  ));
