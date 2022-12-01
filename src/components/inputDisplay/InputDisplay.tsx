import InputPanel from "./inputPanel/InputPanel";
import WordDisplay from "./wordDisplay/WordDisplay";

type inputDisplay = {
  word: string;
  solveState: boolean[];
  containsLetter: (letter: string) => boolean;
};

const InputDisplay = ({ word, solveState, containsLetter }: inputDisplay) => {
  return (
    <div id="input-display" className="stack-h-center">
      <WordDisplay word={word} solveState={solveState} />
      <InputPanel word={word} containsLetter={containsLetter} />
    </div>
  );
};

export default InputDisplay;
