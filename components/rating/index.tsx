import { useState } from "react";
import Svg from "../svg";

export default function Rating({
  colorContained,
  colorOutlined,
  ...props
}: {
  colorContained?: string;
  colorOutlined?: string;
}) {
  const [enable, setEnable] = useState(0);
  const Star = ({
    display,
    onClick,
    onMouseEnter
  }: {
    display?: boolean;
    onClick: () => void;
    onMouseEnter: () => void;
  }) =>
    display ? (
      <Svg name="star-contained"
        fill={colorContained || "var(--warning)"}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        {...props}
      />
    ) : (
      <Svg name="star-outlined"
        fill={colorOutlined || "var(--secondary-dark)"}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        {...props}
      />
    );

  const handleClick = (x: number) =>
    enable == x ? setEnable(x - 1) : setEnable(x);

  return (
    <div className="rating" defaultValue={enable.toString()} >
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          onClick={() => handleClick(i)}
          onMouseEnter={()=>setEnable(i)}
          display={enable < i ? false : true}
        />
      ))}
    </div>
  );
}
