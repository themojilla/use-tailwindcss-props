# use-tailwindcss-props

## Get Started

You must install tailwindcss to your project by yourself.
Read official [documentation](https://tailwindcss.com/docs/installation) of tailwindcss.

### Installation

```terminal
npm install use-tailwindcss-props
```

```terminal
yarn add use-tailwindcss-props
```

### Usage

#### Create React Component

```jsx
import React from "react";
import { TailwindProps, useTailwindProps } from "use-tailwindcss-props";

interface ButtonProps extends TailwindProps {}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const className = useTailwindProps(props);
  return <button className={className}>{props.children}</button>;
};
```

#### Use tailwindcss with props

```jsx
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
```

#### Rendered result

```jsx
<button class="px-6 py-3 rounded-md inline-flex border border-transparent items-center text-base font-medium text-indigo-600 hover:bg-indigo-50">
  Click Me
</button>
```

## Documentation

- WIP

## Motivation

- Inspired by [chakra-ui](https://github.com/chakra-ui/chakra-ui).
- To use tailwindcss with React component easily.

## Limitation

- Unable to use tailwind custom plugins.
- Multiple pseudo classes are not supported (ex: `md:focus:text-black`).
- There could be invalid type suggestions which is not going to change your UI, based on your settings on `tailwind.config.js` (ex: `active:m-4`).
