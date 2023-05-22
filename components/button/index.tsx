import buttonProps from "./buttonProps";
import { useRouter } from "next/router";

export default function Button({
  children,
  variant = "contained",
  color = "primary",
  size = "medium",
  disabled,
  fullWidth,
  href,
  rounded,
  onClick,
  ...props
}: buttonProps) {
  const router = useRouter();

  function handleClick(e: { preventDefault: () => void }) {
    e.preventDefault(), router.push(href == undefined ? "" : href);
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={[
        variant,
        color,
        size,
        fullWidth ? "fullWidth" : "",
        rounded ? "rounded" : "",
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
