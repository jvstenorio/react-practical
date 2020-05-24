import React from "react";

import students from "../../data/students";

export default (props) => {
  const lis = students.map((s) => {
    return (
      <li key={s.id} >
        {s.id}) {s.name} -> {s.score}
      </li>
    );
  });

  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
          {lis}
      </ul>
    </div>
  );
};
