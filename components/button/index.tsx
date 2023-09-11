import React from "react";
import { ButtonTypes } from "@/types/ButtonTypes";
import styles from "@/styles/button/Button.module.css";
import { useRouter } from "next/router";

export default function Button({
  children,
  variant = "contained",
  size = "size-md",
  color = "primary",
  disabled,
  href,
  rounded = "rounded",
  shadow = "shadow-md",
  endIcon,
  startIcon,
  ...props
}: ButtonTypes) {
  const router = useRouter();
  const handleClick = (e: { preventDefault: () => void }) => {
    if (href !== undefined) {
      e.preventDefault();
      router.push(href);
    }
  };
  return (
    <button
      onClick={handleClick}
      className={[
        styles.button,
        styles[variant],
        styles[color],
        styles[size],
        styles[shadow],
        styles[rounded],
      ].join(" ")}
      disabled={disabled}
      {...props}
    >
      {startIcon && <span className={styles.start_icon}>{startIcon}</span>}
      {children && <span>{children}</span>}
      {endIcon && <span className={styles.end_icon}>{endIcon}</span>}
    </button>
  );
}
