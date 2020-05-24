import React from "react";

import DirectChild from "./DirectChild"

export default (props) => {
  return (
    <div>
      <DirectChild text="input" number={5478} bool={true}/>
      <DirectChild text="banana" number={5478.695855} bool={false}/>
    </div>
  );
};