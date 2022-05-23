import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Dictionary</h1>
      </header>
      <Dictionary defaultKeyWord="rise" />
    </div>
  );
}

export default App;
