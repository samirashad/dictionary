import Meaning from "./Meaning";
import { Fragment } from "react";
import audio from "./images/audio.png";
import "./Results.css";

export default function Results(props) {
  if (props.data) {
    function handleAudio(audioSrc, e) {
      const audio = new Audio(audioSrc);
      audio.play();
    }
    return (
      <div className="results">
        <section className="phonetics">
          <h2>{props.data.word}</h2>
          {props.data.phonetics.map((phonetic, index) => {
            return (
              <div key={index} className="d-flex mb-2">
                <img
                  src={audio}
                  alt="listen"
                  width="30px"
                  height="30px"
                  onClick={(event) => {
                    handleAudio(phonetic.audio, event);
                  }}
                />
                <h4 className="ms-3">{phonetic.text}</h4>
              </div>
            );
          })}
        </section>
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
