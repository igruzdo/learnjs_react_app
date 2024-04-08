import React from 'react';
import { UseUser } from '../hooks/user-hook/user-hook';
export type Theme = 'white' | 'dark';

export const UserContext = React.createContext<UseUser>({
  user: null,
  login: () => {},
  logout: () => {},
});
