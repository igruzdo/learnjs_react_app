import { FC, MouseEventHandler } from 'react';
import { Tab } from '../ui/tab/tab.component';
import { useSelector } from 'react-redux';
import { RestaurantMap, StoreSlices } from '../../types/store';

interface RestaurantTabProps {
  id: string;
  isActive: boolean;
  onClick: MouseEventHandler;
}

export const RestaurantTab: FC<RestaurantTabProps> = ({
  id,
  isActive,
  onClick,
}) => {
  const restaurant = useSelector<StoreSlices, RestaurantMap[string]>(
    (state) => state.restaurant.entities[id],
  );
  if (!restaurant) return;
  return <Tab title={restaurant.name} isActive={isActive} onClick={onClick} />;
};
