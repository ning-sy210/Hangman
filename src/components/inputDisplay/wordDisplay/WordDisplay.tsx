import CharacterDisplay from "./CharacterDisplay";

type wordDisplay = {
  word: string;
  guessState: boolean[];
};

const WordDisplay = ({ word, guessState }: wordDisplay) => {
  return (
    <div id="word-display">
      {Array.from(word).map((letter, i) => (
        <CharacterDisplay
          key={`word-letter-${i + 1}`}
          letter={letter}
          show={guessState[i]}
        />
      ))}
    </div>
  );
};

export default WordDisplay;
