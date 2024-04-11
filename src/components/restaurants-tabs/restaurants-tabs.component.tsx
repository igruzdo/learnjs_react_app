import { FC } from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '../../types/store';
import { RestaurantTab } from '../restaurant-tab/restauramt-tab.components';
import { selectRestaurantIds } from '../../redux/enities/restaurant/selector';

interface RestaurantsTabsProps {
  currentId: string;
  onTabClick: (index: string) => void;
}

export const RestaurantsTabs: FC<RestaurantsTabsProps> = ({
  onTabClick,
  currentId,
}) => {
  const restaurantIds = useSelector<AppStore, string[]>(selectRestaurantIds);

  return (
    <div>
      {restaurantIds.map((restaurantId) => (
        <RestaurantTab
          key={restaurantId}
          id={restaurantId}
          isActive={restaurantId === currentId}
          onClick={() => onTabClick(restaurantId)}
        />
      ))}
    </div>
  );
};
