import { ButtonTypes } from "@/types/ButtonTypes";
import { useRouter } from "next/router";
import styles from "@/styles/button/outlined.module.css";

export default function ButtonOutlined({
  children,
  href,
  color = "primary",
  rounded = "rounded",
  size = "size-md",
  shadow = "shadow",
  disabled,
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
      className={[
        styles.button,
        !disabled && styles[color],
        size,
        shadow,
        rounded,
      ].join(" ")}
      onClick={handleClick}
      disabled={disabled}
    >
      {startIcon && <span>{startIcon}</span>}
      {children && <span>{children}</span>}
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
}
