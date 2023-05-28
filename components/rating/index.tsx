import { useState } from "react";
import Svg from "../icon";

export default function Rating({
  colorContained,
  colorOutlined,
  ...props
}: {
  colorContained?: string;
  colorOutlined?: string;
}) {
  const [enable, setEnable] = useState(0);
  const [hover, setHover] = useState(0);
  const Star = ({
    display,
    hover,
    onClick,
    onMouseEnter,
    onMouseLeave,
  }: {
    display?: boolean;
    hover?: boolean;
    onClick: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  }) =>
    display || hover ? (
      <Svg
        name="star-contained"
        fill={colorContained || "var(--warning)"}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...props}
      />
    ) : (
      <Svg
        name="star-outlined"
        fill={colorOutlined || "var(--secondary-dark)"}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...props}
      />
    );

  const handleClick = (x: number) =>
    enable == x ? setEnable(x - 1) : setEnable(x);

  return (
    <div className="rating" defaultValue={enable.toString()}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          onClick={() => handleClick(i)}
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover(0)}
          display={enable < i ? false : true}
          hover={hover < i ? false : true}
        />
      ))}
    </div>
  );
}
