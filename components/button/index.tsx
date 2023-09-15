import { ButtonTypes } from "@/types/ButtonTypes";
import { useRouter } from "next/router";

export default function Button({
  children,
  disabled,
  href,
  rounded = "rounded",
  shadow = "shadow",
  color = "primary",
  size = "size-md",
  variant = "contained",
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
      className={[variant, size, color, shadow, rounded].join(" ")}
      disabled={disabled}
      onClick={handleClick}
    >
      {startIcon && <span>{startIcon}</span>}
      {children && <span>{children}</span>}
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
}
