import { useState, useEffect } from "react";

function Joke() {
  const [joke, setJoke] = useState(null);

  async function fetchData() {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any");
    const data = await response.json();
    setJoke(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (joke === null) return null;

  return (
    <div>
      <p>{joke.setup}</p>
      <button
        onClick={() => {
          fetchData();
        }}
      >
        Fetch
      </button>
    </div>
  );
}
export default Joke;
