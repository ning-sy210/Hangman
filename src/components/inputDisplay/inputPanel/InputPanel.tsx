import CharacterInput from "./CharacterInput";

type inputPanel = {
  word: string;
  containsLetter: (letter: string) => boolean;
};

const InputPanel = ({ word, containsLetter }: inputPanel) => {
  const alphabet = Array.from(Array(26)).map((e, i) =>
    String.fromCharCode(i + 65)
  );

  return (
    <div id="input-panel">
      {alphabet.map((letter) => (
        <CharacterInput
          key={`${letter}-char-input`}
          word={word}
          letter={letter}
          containsLetter={() => containsLetter(letter)}
        />
      ))}
    </div>
  );
};

export default InputPanel;
