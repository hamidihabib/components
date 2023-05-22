export default interface alertProps {
  /**
   * The components used for each slot inside.
   * @default {}
   */
  children?: React.ReactNode;
  /**
   * The color of the alert.
   */
  color?: "success" | "info" | "warning" | "danger";
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant?: "standard" | "filled" | "outlined";
  /**
   * Override the icon displayed before the children.
   */
  icon?: React.ReactNode;
}
