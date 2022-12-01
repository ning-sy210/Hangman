import RandomWord from "random-words";
import { useEffect, useState } from "react";

import HangmanDisplay from "./components/hangmanDisplay/HangmanDisplay";
import InputDisplay from "./components/inputDisplay/InputDisplay";

import "./App.css";

function App() {
  const [word, setWord] = useState(RandomWord(1)[0].toUpperCase());
  const [solveState, setSolveState] = useState(
    new Array(word.length).fill(false)
  );
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [showPlayAgain, setShowPlayAgain] = useState(false);

  useEffect(() => {
    if (
      wrongGuesses !== 5 &&
      solveState.filter((x) => x).length !== word.length
    ) {
      return;
    }

    setShowPlayAgain(true);
  }, [wrongGuesses, solveState]);

  const containsLetter = (letter: string) => {
    if (!word.includes(letter)) {
      setWrongGuesses((prev) => prev + 1);
      return false;
    }

    const newSolveState = [...solveState];

    Array.from(word).forEach((c, i) => {
      if (c === letter) {
        newSolveState[i] = true;
      }
    });

    setSolveState(newSolveState);
    return true;
  };

  const resetGame = () => {
    setWord(RandomWord(1)[0].toUpperCase());
    setSolveState(new Array(word.length).fill(false));
    setWrongGuesses(0);
    setShowPlayAgain(false);
  };

  const renderPlayAgainButton = () => {
    if (!showPlayAgain) {
      return null;
    }

    return (
      <button
        id="play-again-btn"
        className="btn"
        onClick={resetGame}
        title="Play Again"
      >
        Play Again
      </button>
    );
  };

  return (
    <div className="App stack-h-center">
      <HangmanDisplay wrongGuesses={wrongGuesses} />
      {renderPlayAgainButton()}
      <InputDisplay
        word={word}
        solveState={solveState}
        containsLetter={containsLetter}
      />
    </div>
  );
}

export default App;
