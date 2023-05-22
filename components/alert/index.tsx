import React from "react";
import alertProps from "./alertProps";
import Icon from "../icon";

export default function Blockquote({
  children,
  color = "success",
  variant = "filled",
  ...props
}: alertProps) {
  const Icons =
    color == "danger" ? (
      <Icon.CircleExclamation />
    ) : color == "info" ? (
      <Icon.CircleInfo />
    ) : color == "warning" ? (
      <Icon.TriangleExclamation />
    ) : (
      <Icon.CircleCheck />
    );

  return (
    <div className={["alert", color, variant].join(" ")} {...props}>
      {Icons}
      {children}
    </div>
  );
}
