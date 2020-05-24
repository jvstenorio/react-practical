import React from "react";

export default (props) => {
 
  return (
    <div>
      <span>
        <strong>{props.name}</strong> {props.surname}
      </span>
    </div>
  );
};
