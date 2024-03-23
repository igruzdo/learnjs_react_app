import { FC } from 'react';

export const Empty: FC<{
  message: string;
}> = ({ message }) => <>Список {message} пуст!</>;
