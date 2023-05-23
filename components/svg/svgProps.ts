export default interface svgProps extends React.SVGAttributes<SVGSVGElement> {
  
  name:
    | "star-contained"
    | "star-outlined"
    | "circle-check"
    | "circle-exclamation"
    | "circle-info"
    | "triangle-exclamation";
}
