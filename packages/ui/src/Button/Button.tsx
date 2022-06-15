import { cn } from "@bem-react/classname";
import React from "react";

import s from "./Button.module.js";

export interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const cnButton = cn(s.Button);

export const Button = ({ className, children }: ButtonProps): JSX.Element => {
  return <div className={cnButton(undefined, [className])}>{children}</div>;
};
