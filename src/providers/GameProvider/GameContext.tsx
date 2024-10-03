import { createContext } from "react";
import { Game } from "./types";

export const GameContext = createContext<Game | undefined>(undefined);
