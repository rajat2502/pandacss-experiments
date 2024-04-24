import React from 'react';

type Props = {
    color?: string;
} & React.HTMLProps<HTMLButtonElement>;
declare const Button: ({ color }: Props) => React.JSX.Element;

export { Button };
