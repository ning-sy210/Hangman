import { useEffect, useState } from "react";

type charInput = {
  word: string;
  letter: string;
  containsLetter: () => boolean;
};

const CharacterInput = ({ word, letter, containsLetter }: charInput) => {
  const [statusClassName, setStatusClassName] = useState("");

  useEffect(() => {
    setStatusClassName("");
  }, [word]);

  const onClick = () => {
    let className = " disabled";

    if (containsLetter()) {
      className = "correct" + className;
    } else {
      className = "incorrect" + className;
    }
    setStatusClassName(className);
  };

  return (
    <button
      className={`char-input vh-center ${statusClassName}`}
      onClick={onClick}
      title={letter}
    >
      {letter}
    </button>
  );
};

export default CharacterInput;
