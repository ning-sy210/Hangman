import { useState } from "react";

type charInput = {
  letter: string;
  containsLetter: () => boolean;
};

const CharacterInput = ({ letter, containsLetter }: charInput) => {
  const [statusClassName, setStatusClassName] = useState("");

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
