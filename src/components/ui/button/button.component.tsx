import { FC, ReactNode, useContext } from 'react';
import { ThemeContext } from '../../../context/theme.context';
import styles from './button.module.scss';
import classNames from 'classnames';

interface ButtonProps {
  defaultOnly?: boolean;
  children: ReactNode[] | ReactNode;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ defaultOnly, children, onClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      className={classNames(styles.root, {
        [styles[theme]]: !defaultOnly,
      })}
    >
      {children}
    </button>
  );
};
