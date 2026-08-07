import { createContext } from "react";

import type { User } from "../types/user";

export interface UserContextType {

  user: User;

  setUser: React.Dispatch<
    React.SetStateAction<User>
  >;

  recordToday(data: {
    drankMate: boolean;
    thermos: number;
  }): void;

  unlockSticker(
    stickerId: string
  ): void;

  equipMate(
    mateId: string
  ): void;

  equipThermo(
    thermoId: string
  ): void;

}

export const UserContext =
  createContext<UserContextType | null>(null);