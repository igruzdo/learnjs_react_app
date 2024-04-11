import { useContext, useState } from 'react';
import { UserContext } from '../../context/user.context';
import { UserButtons } from '../user-buttons/user-buttons.component';

export const User = () => {
  const [userName, setUserName] = useState<string>('');
  const { user, login, logout } = useContext(UserContext);

  const logoutCallback = () => {
    setUserName('');
    logout();
  };

  return (
    <div>
      {!user ? (
        <input
          type="text"
          onChange={(event) => setUserName(event.target.value)}
        />
      ) : (
        userName
      )}
      <UserButtons login={() => login(userName)} logout={logoutCallback} />
    </div>
  );
};
