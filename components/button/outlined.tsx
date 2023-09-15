import React from "react";
import { ButtonTypes } from "@/types/ButtonTypes";
import { useRouter } from "next/router";

export default function ButtonOutlined({
  children,
  color,
  disabled,
  href,
  rounded,
  shadow,
  size,
  startIcon,
  endIcon,
}: ButtonTypes) {
  const router = useRouter();
  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (href !== undefined) {
      router.push(href);
    }
  };
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={[size, color, shadow, rounded].join(" ")}
    >
      {startIcon && <span>{startIcon}</span>}
      {children && <span>{children}</span>}
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
}
