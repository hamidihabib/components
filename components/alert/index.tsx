import React from "react";
import alertProps from "./alertProps";
import Svg from "../svg";

export default function Blockquote({
  children,
  color = "success",
  variant = "filled",
  ...props
}: alertProps) {
  const Icons =
    color == "danger" ? (
      <Svg name="circle-exclamation" />
    ) : color == "info" ? (
      <Svg name="circle-info" />
    ) : color == "warning" ? (
      <Svg name="triangle-exclamation" />
    ) : (
      <Svg name="circle-check" />
    );

  return (
    <div className={["alert", color, variant].join(" ")} {...props}>
      {Icons}
      {children}
    </div>
  );
}
