export type ButtonTypes = React.JSX.IntrinsicAttributes &
  React.ClassAttributes<HTMLButtonElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    /**
     * The content of the button.
     */
    children?: React.ReactNode;
    /**
     * The color of the button.
     * @default 'primary'
     */
    color?: "primary" | "secondary" | "success" | "error" | "info" | "warning";
    /**
     * If `true`, the button is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * The URL to link to when the button is clicked.
     */
    href?: string;
    /**
     * The size of the button.
     * @default 'md'
     */
    size?: "size-sm" | "size-md" | "size-lg" | "size-xl" | "size-2xl";
    /**
     * The size of the button border radius.
     * @default 'md'
     */
    rounded?:
      | "rounded-sm"
      | "rounded-md"
      | "rounded-lg"
      | "rounded-xl"
      | "rounded-2xl"
      | "rounded"
      | "rounded-full"
      | "rounded-none";
    /**
     * The size of the button shadow.
     * @default 'shadow'
     */
    shadow?:
      | "shadow-sm"
      | "shadow-md"
      | "shadow-lg"
      | "shadow-xl"
      | "shadow-none";
    /**
     * The variant to use.
     * @default 'contained'
     */
    variant?: "text" | "outlined" | "contained";
    /**
     * Element placed before the children.
     */
    startIcon?: React.ReactNode;
    /**
     * Element placed after the children.
     */
    endIcon?: React.ReactNode;
  };
