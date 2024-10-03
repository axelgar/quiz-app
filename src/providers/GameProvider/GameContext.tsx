import { createContext, useContext } from "react";
import { Game } from "./types";

export const GameContext = createContext<Game | undefined>(undefined);

export const useGameProvider = () => {
  const gameProvider = useContext(GameContext);
  if (gameProvider === undefined) {
    throw new Error("'useGameProvider' has to be used inside GameProvider.");
  }
  return gameProvider;
};
