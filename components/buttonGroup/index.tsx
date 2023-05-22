import React from "react";
import buttonGroupProps from "./buttonGroupProps";

export default function ButtonGroup({
  children,
  direction = "row",
  ...props
}: buttonGroupProps) {
  return (
    <div className={["button-group", direction].join(" ")} {...props}>
      {children}
    </div>
  );
}
