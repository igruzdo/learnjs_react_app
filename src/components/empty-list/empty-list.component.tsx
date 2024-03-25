import { FC } from 'react';

export const EmptyList: FC<{
  entity: string;
}> = ({ entity }) => <>Список {entity} пуст!</>;
