import React from "react";

import { css } from "@headout/token-system/css";

type Props = {
  color: string;
} & React.HTMLProps<HTMLButtonElement>;

const Button = ({ color }: Props) => {
  return (
    <button
      className={css({
        color: color ?? "brand.purps",
        backgroundColor: "gray.lightGray",
      })}
    >
      Click me
    </button>
  );
};
