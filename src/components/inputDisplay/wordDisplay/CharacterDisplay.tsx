import { useContext } from "react";
import {
  GameState,
  GameStateContext,
} from "../../../contexts/GameStateContext";

type charDisplay = {
  letter: string;
  show: boolean;
};

const CharacterDisplay = ({ letter, show }: charDisplay) => {
  const gameState = useContext(GameStateContext);

  const getCharDisplayColor = () => {
    switch (gameState) {
      case GameState.FAILED:
        return "failed-display";

      case GameState.SOLVED:
        return "solved-display";

      default:
        return "";
    }
  };

  const renderLetter = () => {
    if (!show && gameState === GameState.ACTIVE) {
      return null;
    }

    return letter;
  };

  return (
    <div className={`vh-center char-display ${getCharDisplayColor()}`}>
      {renderLetter()}
    </div>
  );
};

export default CharacterDisplay;
