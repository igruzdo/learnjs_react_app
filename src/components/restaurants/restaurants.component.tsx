import { FC } from 'react';
import { Restaurant } from '../restaurant/restaurant.component';
import { EmptyList } from '../empty-list/empty-list.component';
import { RestaurantInterface } from '../../types/restaurant.models';

export interface RestaurantsProps {
  restaurants: RestaurantInterface[];
}

export const Restaurants: FC<RestaurantsProps> = ({ restaurants }) => (
  <div>
    {restaurants?.length ? (
      <ul>
        {restaurants.map((item) => (
          <Restaurant restaurant={item} />
        ))}
      </ul>
    ) : (
      <EmptyList entity="ресторанов" />
    )}
  </div>
);
