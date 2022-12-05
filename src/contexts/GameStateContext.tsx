import { createContext } from "react";

enum GameState {
  SOLVED = "solved",
  FAILED = "failed",
  ACTIVE = "active",
}

const GameStateContext = createContext(GameState.ACTIVE);

export { GameState, GameStateContext };
