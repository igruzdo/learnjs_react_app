import { FC } from 'react';
import { Tab } from '../ui/tab/tab.component';
import { RestaurantInterface } from '../../types/restaurant.models';

interface RestaurantsTabsProps {
  restaurants: RestaurantInterface[];
  currentIndex: number;
  onTabClick: (index: number) => void;
}

export const RestaurantsTabs: FC<RestaurantsTabsProps> = ({
  restaurants,
  onTabClick,
  currentIndex,
}) => {
  return (
    <div>
      {restaurants.map((restaurant, index) => (
        <Tab
          key={index}
          title={restaurant.name}
          isActive={index === currentIndex}
          onClick={() => onTabClick(index)}
        />
      ))}
    </div>
  );
};
