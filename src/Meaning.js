import "./Meaning.css";

export default function Meaning(props) {
  return (
    <section className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <div className="definition mt-3">{definition.definition}</div>
            <div className="example">{definition.example}</div>
            {definition.synonyms.map((synonym, index) => {
              return <li key={index}>{synonym} </li>;
            })}
          </div>
        );
      })}
    </section>
  );
}
