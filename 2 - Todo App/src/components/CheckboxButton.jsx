import React from "react";
import CheckboxIcon from "@/assets/icons/check.jsx";

function CheckboxButton() {
  return (
    <>
      <input type="checkbox" id="1" />
      <label htmlFor="1" className="checkbox-icon">
        <CheckboxIcon />
      </label>
    </>
  );
}

export default CheckboxButton;
