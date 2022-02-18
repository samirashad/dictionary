export default function Meaning(props) {
  return (
    <>
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <p key={index}>
            {definition.definition}
            <br />
            {definition.example}
          </p>
        );
      })}
    </>
  );
}
