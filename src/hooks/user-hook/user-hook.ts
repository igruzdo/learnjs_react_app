import { useState } from "react";
import { Theme } from "../../context/theme.context";

export interface UseUser {
  user: string | undefined | null;
  login: (userName: string) => void;
  logout: () => void;
}

export const useUserLoginLogout = (): UseUser => {
  const [user, setUser] = useState<string | null>(null);

  return {
    user,
    login: (userName: string) => setUser(userName),
    logout: () => setUser(null),
  };
};
