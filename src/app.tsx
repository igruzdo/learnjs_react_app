import { useMemo, useState } from 'react';
import { RestaurantsTabs } from './components/restaurants-tabs/restaurants-tabs.component';
import { Layout } from './components/layout/layout.component';
import { Restaurant } from './components/restaurant/restaurant.component';
import { ThemeContext } from './context/theme.context';
import { useTheme } from './hooks/theme-hook/theme-hook';
import { UserContext } from './context/user.context';
import { useUserLoginLogout } from './hooks/user-hook/user-hook';
import { useSelector } from 'react-redux';
import { EntytySlice, RestaurantMap, StoreSlices } from './types/store';

const getFromLocalStorageRestaurantIndex = () =>
  localStorage.getItem('currentRestaurantId');

const setInLocalStorageRestaurantIndex = (id: string) => () => {
  localStorage.setItem('currentRestaurantId', id);
  return id;
};

export const App = () => {
  const restaurantsEntities = useSelector<
    StoreSlices,
    EntytySlice<RestaurantMap>
  >((state) => state.restaurant);
  const restaurantsIds = restaurantsEntities.ids;
  const [currentRestaurantId, setRestaurantIndex] = useState(
    getFromLocalStorageRestaurantIndex,
  );

  const { theme, setTheme } = useTheme();
  const { user, login, logout } = useUserLoginLogout();

  const themeContextMemo = useMemo(
    () => ({ theme, setTheme }),
    [theme, setTheme],
  );
  const userContextMemo = useMemo(
    () => ({ user, login, logout }),
    [user, login, logout],
  );

  let currentRestaurant =
    restaurantsEntities.entities[currentRestaurantId ?? restaurantsIds[0]];

  const onTabClickHandler = (id: string) =>
    setRestaurantIndex(setInLocalStorageRestaurantIndex(id));

  return (
    <UserContext.Provider value={userContextMemo}>
      <ThemeContext.Provider value={themeContextMemo}>
        <Layout>
          <RestaurantsTabs
            currentId={currentRestaurant.id}
            onTabClick={onTabClickHandler}
          />
          {currentRestaurant && (
            <Restaurant restaurantId={currentRestaurant.id} />
          )}
        </Layout>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};
