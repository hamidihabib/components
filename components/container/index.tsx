import React from "react";

type ContainerTypes = React.JSX.IntrinsicAttributes &
  React.ClassAttributes<HTMLElement> &
  React.HTMLAttributes<HTMLElement> & {
    children: React.ReactNode;
  };

export default function Container({ children, ...props }: ContainerTypes) {
  return <main {...props}>{children}</main>;
}
