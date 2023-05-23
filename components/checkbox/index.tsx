import React from "react";

export default function Checkbox() {
  return (
    <label className="checkbox">One
      <input aria-checked="true" />
      <span className="checkmark" />
    </label>
  );
}
