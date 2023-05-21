import React from "react";

interface Props extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export default function Main({ children }: Props) {
  return <main>{children}</main>;
}
