import Meaning from "./Meaning";
import React from "react";
export default function Results(props) {
  if (props.data) {
    return (
      <div className="results">
        <h2>{props.data.word}</h2>
        {props.data.meanings.map((meaning, index) => {
          return (
            <React.Fragment key={index}>
              <Meaning meaning={meaning} />
            </React.Fragment>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
