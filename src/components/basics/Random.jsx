import React from "react";

export default (props) => (
  <div>
      <h3>Min: <strong>{props.min}</strong></h3>
      <h3>Max: <strong>{props.max}</strong></h3>
      <h3>Picked: <strong>{props.min + Math.floor((props.max - props.min) * Math.random())}</strong></h3>
</div>
);
