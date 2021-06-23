import logo from "./logo.svg";
import "./App.css";
import Joke from "./Joke.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Joke />
      </header>
    </div>
  );
}

export default App;
