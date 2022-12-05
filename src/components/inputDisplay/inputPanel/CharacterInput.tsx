import { useContext, useEffect, useState } from "react";
import {
  GameState,
  GameStateContext,
} from "../../../contexts/GameStateContext";

type charInput = {
  word: string;
  letter: string;
  containsLetter: () => boolean;
};

const CharacterInput = ({ word, letter, containsLetter }: charInput) => {
  const gameState = useContext(GameStateContext);
  const [statusClassName, setStatusClassName] = useState("");

  useEffect(() => {
    setStatusClassName("");
  }, [word]);

  useEffect(() => {
    if (statusClassName || gameState === GameState.ACTIVE) {
      return;
    }

    setStatusClassName("gray-text disabled");
  }, [gameState]);

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
