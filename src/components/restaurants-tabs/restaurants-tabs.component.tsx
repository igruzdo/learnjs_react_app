import { FC } from 'react';
import { useSelector } from 'react-redux';
import { StoreSlices } from '../../types/store';
import { RestaurantTab } from '../restaurant-tab/restauramt-tab.components';

interface RestaurantsTabsProps {
  currentId: string;
  onTabClick: (index: string) => void;
}

export const RestaurantsTabs: FC<RestaurantsTabsProps> = ({
  onTabClick,
  currentId,
}) => {
  const restaurantIds = useSelector<StoreSlices, string[]>(
    (state) => state.restaurant.ids,
  );

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
