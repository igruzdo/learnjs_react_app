import { FC, useContext } from 'react';
import { Button } from '../ui/button/button.component';
import { UserContext } from '../../context/user.context';

interface UserButtonsProps {
  login: () => void;
  logout: () => void;
}

export const UserButtons: FC<UserButtonsProps> = ({ login, logout }) => {
  const { user } = useContext(UserContext);
  return (
    <div>
      {user ? (
        <Button onClick={logout}>Logout</Button>
      ) : (
        <Button onClick={login}>Login</Button>
      )}
    </div>
  );
};
