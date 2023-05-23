import { useState } from "react";

export default function Rating() {
  const [enable, setEnable] = useState(0);
  const Start = ({
    enabled,
    onClick,
    ...props
  }: {
    enabled?: boolean;
    onClick: () => void;
  }) => (
    <svg
      width="1rem"
      height="1rem"
      viewBox="0 0 528 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      onClick={onClick}
      {...props}
    >
      <path
        display={enabled ? "block" : "none"}
        d="M263.9 0C273.1 0 281.5 5.2 285.5 13.5L354.1 154.8L507.3 177.4C516.3 178.7 523.8 185 526.6 193.7C529.4 202.4 527.1 211.8 520.7 218.2L409.6 328.4L435.8 484C437.3 493 433.6 502.1 426.2 507.5C418.8 512.9 408.9 513.5 400.9 509.2L263.9 436L127 509.1C118.9 513.4 109.1 512.8 101.7 507.4C94.3 502 90.5 492.9 92 483.9L118.2 328.3L7.10002 218.2C0.600015 211.8 -1.59998 202.3 1.20002 193.7C4.00002 185.1 11.5 178.8 20.5 177.4L173.7 154.8L242.3 13.5C246.4 5.2 254.7 0 263.9 0Z"
        fill={"var(--warning)"}
      />
      <path
        display={enabled ? "none" : "block"}
        d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"
        fill={"var(--secondary-dark)"}
      />
    </svg>
  );
  function handleClick(x: number) {
    if (enable == x) {
      setEnable(0);
    } else {
      setEnable(x);
    }
  }

  return (
    <div className="rating">
      <Start
        onClick={() => handleClick(1)}
        enabled={enable < 1 ? false : true}
      />
      <Start
        onClick={() => handleClick(2)}
        enabled={enable < 2 ? false : true}
      />
      <Start
        onClick={() => handleClick(3)}
        enabled={enable < 3 ? false : true}
      />
      <Start
        onClick={() => handleClick(4)}
        enabled={enable < 4 ? false : true}
      />
      <Start
        onClick={() => handleClick(5)}
        enabled={enable < 5 ? false : true}
      />
    </div>
  );
}
