export default interface buttonGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * direction of group buttons
   * @default row
   */
  direction?: "row" | "column";
}
