import { FC, MouseEventHandler } from 'react';

interface TabProps {
  title: string;
  isActive: boolean;
  onClick: MouseEventHandler;
}

export const Tab: FC<TabProps> = ({ title, isActive, onClick }) => {
  return (
    <button onClick={onClick} disabled={isActive}>
      {title}
    </button>
  );
};
