export default function Meaning(props) {
  return (
    <>
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <p key={index}>
            <strong>Definition: </strong>
            {definition.definition}
            <br />
            {definition.example && (
              <>
                <strong>Example: </strong>
                {definition.example} <br />
              </>
            )}

            {definition.synonyms && (
              <>
                <span className="fw-bold">Synonyms: </span>
                {definition.synonyms.map((synonym, index) => {
                  return <span key={index}>{synonym} </span>;
                })}
              </>
            )}
          </p>
        );
      })}
    </>
  );
}
