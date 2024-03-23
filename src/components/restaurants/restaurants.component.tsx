import { FC } from 'react';
import { Restaurant } from '../restaurant/restaurant.component';
import { RestaurantsProps } from '../../types/restaurants.models';
import { Empty } from '../empty/empty.component';

export const Restaurants: FC<RestaurantsProps> = ({ restaurants }) => (
  <div>
    {restaurants?.length ? (
      <ul>
        {restaurants.map((item) => (
          <Restaurant restaurant={item} />
        ))}
      </ul>
    ) : (
      <Empty message="ресторанов" />
    )}
  </div>
);
