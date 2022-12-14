import RandomWord from "random-words";
import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

import HangmanDisplay from "./components/hangmanDisplay/HangmanDisplay";
import InputDisplay from "./components/inputDisplay/InputDisplay";

import { GameState, GameStateContext } from "./contexts/GameStateContext";

import "./App.css";

function App() {
  const [word, setWord] = useState(RandomWord(1)[0].toUpperCase());
  const [solveState, setSolveState] = useState(
    Array.from(Array(word.length)).map((x) => false)
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
    const newWord = RandomWord(1)[0].toUpperCase();
    setWord(newWord);
    setSolveState(new Array(newWord.length).fill(false));
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

  const getGameStateContextValue = () => {
    if (wrongGuesses === 5) {
      return GameState.FAILED;
    } else if (solveState.filter((x) => x).length === word.length) {
      return GameState.SOLVED;
    }

    return GameState.ACTIVE;
  };

  const renderConfetti = () => {
    if (getGameStateContextValue() !== GameState.SOLVED) {
      return null;
    }

    return (
      <ReactConfetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={1000}
        recycle={false}
      />
    );
  };

  return (
    <div className="App stack-h-center">
      <HangmanDisplay wrongGuesses={wrongGuesses} />
      {renderPlayAgainButton()}

      <GameStateContext.Provider value={getGameStateContextValue()}>
        <InputDisplay
          word={word}
          solveState={solveState}
          containsLetter={containsLetter}
        />
      </GameStateContext.Provider>
      {renderConfetti()}
    </div>
  );
}

export default App;
