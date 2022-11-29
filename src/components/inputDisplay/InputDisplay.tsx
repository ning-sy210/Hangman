import RandomWord from "random-words";
import { useState } from "react";
import InputPanel from "./inputPanel/InputPanel";
import WordDisplay from "./wordDisplay/WordDisplay";

const InputDisplay = () => {
  const [word, setWord] = useState(RandomWord(1)[0].toUpperCase());
  const [guessTracker, setGuessTracker] = useState(
    new Array(word.length).fill(false)
  );

  const containsLetter = (letter: string) => {
    if (!word.includes(letter)) {
      return false;
    }

    const newGuessState = [...guessTracker];

    Array.from(word).forEach((c, i) => {
      if (c === letter) {
        newGuessState[i] = true;
      }
    });

    setGuessTracker(newGuessState);
    return true;
  };

  return (
    <div id="input-display" className="stack-h-center">
      <WordDisplay word={word} guessState={guessTracker} />
      <InputPanel containsLetter={containsLetter} />
    </div>
  );
};

export default InputDisplay;
