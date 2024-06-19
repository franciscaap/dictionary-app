import "./App.css";
import Dictiionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-logo text-decoration-none"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          F P
        </a>
        <Dictiionary />
      </header>
      <footer>
        Coded by <a href="/">Francisca Agyekum Poku</a>, code hosted on{" "}
        <a href="/">GitHub</a> and website hosted on <a href="/">Netlify.</a>
      </footer>
    </div>
  );
}

export default App;
