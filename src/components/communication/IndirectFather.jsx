import React, { useState } from "react";

import IndirectChild from "./IndirectChild";

export default (props) => {
  const [name,setName] = useState("?");
  const [age,setAge] = useState(0);
  const [isNerd,setIsNerd] = useState(false);

  function postInformations(name, age, isNerd) {
      setName(name);
      setAge(age);
      setIsNerd(isNerd);
  }

  return (
    <div>
      <div>
        <span>{name} </span>
        <span>
          <strong>{age}</strong>{" "}
        </span>
        <span>{isNerd ? "True" : "False"}!</span>
      </div>
      <IndirectChild onClick={postInformations} />
    </div>
  );
};
