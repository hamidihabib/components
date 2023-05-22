export default interface buttonProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * The color of the component.
   * @default 'primary'
   */
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "danger";
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, the button borders rounded.
   * @default false
   */
  rounded?: boolean;
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href?: string;
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size?: "small" | "medium" | "large";
  /**
   * The variant to use.
   * @default 'text'
   */
  variant?: "text" | "outlined" | "contained";
  /**
   * onClick event.
   * @default 'undefined'
   */
  onClick?: () => void;
}
