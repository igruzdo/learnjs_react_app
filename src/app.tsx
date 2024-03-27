import { useState } from 'react';
import { RestaurantsTabs } from './components/restaurants-tabs/restaurants-tabs.component';
import { Layout } from './components/layout/layout.component';
import { restaurants } from './constants/mock';
import { Restaurant } from './components/restaurant/restaurant.component';

const getFromLocalStorageRestaurantIdx = () =>
  Number(localStorage.getItem('currentRestaurantIdx'));

const setInLocalStorageRestaurantIdx = (idx: number) => () => {
  localStorage.setItem('currentRestaurantIdx', `${idx}`);
  return idx;
};
export const App = () => {
  const [currentRestaurantIndex, setRestaurantIndex] = useState(
    getFromLocalStorageRestaurantIdx,
  );

  const currentRestaurant = restaurants[currentRestaurantIndex];

  const onTabClickHandler = (idx: number) =>
    setRestaurantIndex(setInLocalStorageRestaurantIdx(idx));

  return (
    <Layout>
      <RestaurantsTabs
        restaurants={restaurants}
        currentIndex={currentRestaurantIndex}
        onTabClick={onTabClickHandler}
      />
      {currentRestaurant && <Restaurant restaurant={currentRestaurant} />}
    </Layout>
  );
};
