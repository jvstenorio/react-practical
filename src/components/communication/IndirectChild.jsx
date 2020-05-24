import React from "react";

export default (props) => {
  const min = 10;
  const max = 70;
  const getAge = () => min + Math.floor((max - min) * Math.random());
  const getIsNerd = () => Math.random() > 0.5;

  return (
    <div>
      <div>Child</div>
      <button onClick={(_) => props.onClick("João", getAge(), getIsNerd())}>
        Post informations
      </button>
    </div>
  );
};
