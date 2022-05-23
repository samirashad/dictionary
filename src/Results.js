import Meaning from "./Meaning";
import { Fragment } from "react";
import audio from "./images/audio.png";

export default function Results(props) {
  if (props.data) {
    function handleAudio(audioSrc, e) {
      const audio = new Audio(audioSrc);
      audio.play();
    }
    return (
      <div className="results">
        <div className="phonetics">
          <h2 className="text-primary">{props.data.word}</h2>
          {props.data.phonetics.map((phonetic, index) => {
            return (
              <div key={index} className="d-flex mb-2">
                <button
                  onClick={(event) => {
                    handleAudio(phonetic.audio, event);
                  }}
                >
                  <img src={audio} alt="listen" width="20px" />
                </button>
                <h4 className="ms-3">{phonetic.text}</h4>
              </div>
            );
          })}
        </div>
        {props.data.meanings.map((meaning, index) => {
          return (
            <Fragment key={index}>
              <Meaning meaning={meaning} />
            </Fragment>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
