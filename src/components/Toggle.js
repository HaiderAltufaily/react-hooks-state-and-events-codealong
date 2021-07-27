import React, { useState } from "react";

function Toggle() {
  const [isOn, setisOn] = useState(false);
  function onClick() {
    setisOn((isOn) => !isOn);
  }

  return (
    <button style={{ background: isOn ? "red" : "white" }} onClick={onClick}>
      {" "}
      {isOn ? "ON" : "OFF"}{" "}
    </button>
  );
}

export default Toggle;
