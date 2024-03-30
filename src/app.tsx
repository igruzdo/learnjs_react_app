import { useState } from 'react';
import { RestaurantsTabs } from './components/restaurants-tabs/restaurants-tabs.component';
import { Layout } from './components/layout/layout.component';
import { restaurants } from './constants/mock';
import { Restaurant } from './components/restaurant/restaurant.component';

const getFromLocalStorageRestaurantIndex = () =>
  Number(localStorage.getItem('currentRestaurantIndex'));

const setInLocalStorageRestaurantIndex = (index: number) => () => {
  localStorage.setItem('currentRestaurantIndex', `${index}`);
  return index;
};
export const App = () => {
  const [currentRestaurantIndex, setRestaurantIndex] = useState(
    getFromLocalStorageRestaurantIndex,
  );

  const currentRestaurant = restaurants[currentRestaurantIndex];

  const onTabClickHandler = (index: number) =>
    setRestaurantIndex(setInLocalStorageRestaurantIndex(index));

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
