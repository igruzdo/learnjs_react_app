import { FC, MouseEventHandler } from 'react';
import { Tab } from '../ui/tab/tab.component';
import { useSelector } from 'react-redux';
import { RestaurantMap, AppStore } from '../../types/store';
import { selectRestaurantById } from '../../redux/enities/restaurant/selector';

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
  const restaurant = useSelector<AppStore, RestaurantMap[string]>((state) =>
    selectRestaurantById(state, id),
  );

  if (!restaurant) return;

  return <Tab title={restaurant.name} isActive={isActive} onClick={onClick} />;
};
