import { useContext } from "react";
import { GameContext } from "./GameContext";

export const useGameProvider = () => {
  const gameProvider = useContext(GameContext);
  if (gameProvider === undefined) {
    throw new Error("'useGameProvider' has to be used inside GameProvider.");
  }
  return gameProvider;
};
