import CharacterInput from "./CharacterInput";

type inputPanel = {
  containsLetter: (letter: string) => boolean;
};

const InputPanel = ({ containsLetter }: inputPanel) => {
  const alphabet = Array.from(Array(26)).map((e, i) =>
    String.fromCharCode(i + 65)
  );

  return (
    <div id="input-panel">
      {alphabet.map((letter) => (
        <CharacterInput
          key={`${letter}-char-input`}
          letter={letter}
          containsLetter={() => containsLetter(letter)}
        />
      ))}
    </div>
  );
};

export default InputPanel;
