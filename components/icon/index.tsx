import svg from "./icon.json";
import svgProps from "./svgProps";

export default function Icon({ name,...props}: svgProps) {
  var s = svg[name];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={s[0]}
      width="1em"
      height="1em"
      {...props}
    >
      <path d={s[1]} />
    </svg>
  );
}
