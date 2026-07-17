import { useEffect, useState } from "react";

import { UserContext } from "./UserContext";

import { defaultUser } from "../data/defaultUser";

import { loadUser, saveUser } from "../storage/userStorage";

import { registerToday } from "../services/userService";

import type { User } from "../types/user";

interface Props {
  children: React.ReactNode;
}

export function UserProvider({ children }: Props) {
  const [user, setUser] = useState<User>(() => {
    return loadUser() ?? defaultUser;
  });

  useEffect(() => {
    saveUser(user);
  }, [user]);

  function recordToday(data: {
    drankMate: boolean;
    thermos: number;
  }) {
    setUser((previous) => registerToday(previous, data));
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        recordToday,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}