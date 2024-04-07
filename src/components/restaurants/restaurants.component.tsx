import { FC } from 'react';
import { Restaurant } from '../restaurant/restaurant.component';
import { EmptyList } from '../empty-list/empty-list.component';
import { RestaurantInterface } from '../../types/restaurant.models';
import { useSelector } from 'react-redux';
import { StoreSlices } from '../../types/store';

interface RestaurantsProps {
  restaurants: RestaurantInterface[];
}

export const Restaurants: FC<RestaurantsProps> = () => {
  const restaurantIds = useSelector<StoreSlices, string[]>(
    (state) => state.restaurant.ids,
  );

  return (
    <div>
      {restaurantIds?.length ? (
        <ul>
          {restaurantIds.map((id) => (
            <Restaurant key={id} restaurantId={id} />
          ))}
        </ul>
      ) : (
        <EmptyList entity="ресторанов" />
      )}
    </div>
  );
};
