import React from "react";
type IconTypes = React.JSX.IntrinsicAttributes &
  React.SVGProps<SVGSVGElement> & {
    name?:
      | "bars"
      | "xMark"
      | "language"
      | "ellipsisHorizontal"
      | "ellipsisVertical"
      | "chevronUp"
      | "chevronRight"
      | "chevronDown"
      | "chevronLeft"
      | "magnifyingGlass"
      | "moon"
      | "sun";
  };

export default function Icon({ name = "bars", ...props }: IconTypes) {
  const icon = {
    bars: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
    xMark: "M6 18L18 6M6 6l12 12",
    language:
      "M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802",
    ellipsisHorizontal:
      "M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
    ellipsisVertical:
      "M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z",
    chevronUp: "M4.5 15.75l7.5-7.5 7.5 7.5",
    chevronRight: "M8.25 4.5l7.5 7.5-7.5 7.5",
    chevronDown: "M19.5 8.25l-7.5 7.5-7.5-7.5",
    chevronLeft: "M15.75 19.5L8.25 12l7.5-7.5",
    magnifyingGlass:
      "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
    moon: "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z",
    sun: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z",
  }[name];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      stroke="currentColor"
      width="1.5rem"
      height="1.5rem"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
    </svg>
  );
}
