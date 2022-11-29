import RandomWord from "random-words";
import { useState } from "react";
import "./App.css";
import HangmanDisplay from "./components/hangmanDisplay/HangmanDisplay";
import InputDisplay from "./components/inputDisplay/InputDisplay";

function App() {
  const [word, setWord] = useState(RandomWord(1)[0].toUpperCase());

  return (
    <div className="App stack-h-center">
      <HangmanDisplay />
      <InputDisplay word={word} />
    </div>
  );
}

export default App;
