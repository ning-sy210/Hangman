import CharacterDisplay from "./CharacterDisplay";

type wordDisplay = {
  word: string;
  solveState: boolean[];
};

const WordDisplay = ({ word, solveState }: wordDisplay) => {
  return (
    <div id="word-display">
      {Array.from(word).map((letter, i) => (
        <CharacterDisplay
          key={`word-letter-${i + 1}`}
          letter={letter}
          show={solveState[i]}
        />
      ))}
    </div>
  );
};

export default WordDisplay;
