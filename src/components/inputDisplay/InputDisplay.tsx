import { useState } from "react";
import InputPanel from "./inputPanel/InputPanel";
import WordDisplay from "./wordDisplay/WordDisplay";

type inputDisplay = {
  word: string;
};

const InputDisplay = ({ word }: inputDisplay) => {
  const [solveState, setSolveState] = useState(
    new Array(word.length).fill(false)
  );

  const containsLetter = (letter: string) => {
    if (!word.includes(letter)) {
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

  return (
    <div id="input-display" className="stack-h-center">
      <WordDisplay word={word} guessState={solveState} />
      <InputPanel containsLetter={containsLetter} />
    </div>
  );
};

export default InputDisplay;
