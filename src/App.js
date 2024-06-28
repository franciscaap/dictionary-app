import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="text-center">
            <a
              className="App-logo text-decoration-none"
              href="/"
              rel="noopener noreferrer"
            >
              F P
            </a>
          </div>

          <Dictionary />
        </header>

        <footer>
          Coded by <a href="/">Francisca Agyekum Poku</a>, code hosted on{" "}
          <a href="/">GitHub</a> and website hosted on <a href="/">Netlify.</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
