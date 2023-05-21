import buttonProps from "./buttonProps";
import styles from "@/styles/button.module.css";

export default function Button({
  children,
  variant = "contained",
  color = "primary",
  size = "medium",
  disabled,
  fullWidth,
  href,
  rounded,
}: buttonProps) {
  return (
    <button
      disabled={disabled}
      className={[
        variant,
        color,
        size,
        fullWidth ? "fullWidth" : "",
        rounded ? "rounded" : "",
      ].join(" ")}
    >
      {children}
    </button>
  );
}
