import { FC } from 'react';
import { Meal } from '../meal/meal.component';
import { EmptyList } from '../empty-list/empty-list.component';
import { MealInterface } from '../../types/meal.models';

interface MenuProps {
  menu: MealInterface[];
}

export const Menu: FC<MenuProps> = ({ menu }) => (
  <div>
    <h3>Меню</h3>
    {menu?.length ? (
      <ul>
        {menu.map((item, index) => (
          <Meal key={index} meal={item} />
        ))}
      </ul>
    ) : (
      <EmptyList entity="меню" />
    )}
  </div>
);
