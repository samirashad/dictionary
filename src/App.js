import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Dictionary</h1>
      </header>
      <Dictionary defaultKeyWord="put" />
      <div className="text-center mt-3 mb-3">
        Coded by <a href="mailto:samira.shad@outlook.com">Samira Shad</a>
      </div>
    </div>
  );
}

export default App;
