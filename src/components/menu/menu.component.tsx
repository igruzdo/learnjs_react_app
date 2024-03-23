import { FC } from 'react';
import { Meal } from '../meal/meal.component';
import { MenuProps } from '../../types/meals.models';
import { Empty } from '../empty/empty.component';

export const Menu: FC<MenuProps> = ({ menu }) => (
  <div>
    <h3>Меню</h3>
    {menu?.length ? (
      <ul>
        {menu.map((item) => (
          <Meal meal={item} />
        ))}
      </ul>
    ) : (
      <Empty message="меню" />
    )}
  </div>
);
