import React, { useState } from "react";
import "./Input.css";

export default (props) => {
  const [value, setValue] = useState("");

  function onChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="Input">
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <input value={value} onChange={onChange} />
        <input value={value} readOnly />
        <input value={undefined}/>
      </div>
      <h2>{value}</h2>
    </div>
  );
};
