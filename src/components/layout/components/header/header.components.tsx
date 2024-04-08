import { useContext } from 'react';
import { Button } from '../../../ui/button/button.component';
import { ThemeContext } from '../../../../context/theme.context';
import classNames from 'classnames';
import styles from './header.module.scss';
import { User } from '../../../user/user.component';

export const Header = () => {
  const { setTheme } = useContext(ThemeContext);

  return (
    <div>
      <header>Header</header>
      <div className={classNames(styles.button)}>
        <Button defaultOnly={true} onClick={setTheme}>
          Тема
        </Button>
        <User />
      </div>
    </div>
  );
};
