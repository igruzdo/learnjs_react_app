import { useMemo, useState } from 'react';
import { RestaurantsTabs } from './components/restaurants-tabs/restaurants-tabs.component';
import { Layout } from './components/layout/layout.component';
import { Restaurant } from './components/restaurant/restaurant.component';
import { ThemeContext } from './context/theme.context';
import { useTheme } from './hooks/theme-hook/theme-hook';
import { UserContext } from './context/user.context';
import { useUserLoginLogout } from './hooks/user-hook/user-hook';
import { useSelector } from 'react-redux';
import { StoreSlices } from './types/store';

const getFromLocalStorageRestaurantIndex = () =>
  localStorage.getItem('currentRestaurantId');

const setInLocalStorageRestaurantIndex = (id: string) => () => {
  localStorage.setItem('currentRestaurantId', id);
  return id;
};

export const App = () => {
  const restaurantsIds = useSelector<StoreSlices, string[]>(
    (state) => state.restaurant.ids,
  );
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

  let restaurantId = currentRestaurantId ?? restaurantsIds[0];

  const onTabClickHandler = (id: string) =>
    setRestaurantIndex(setInLocalStorageRestaurantIndex(id));

  return (
    <UserContext.Provider value={userContextMemo}>
      <ThemeContext.Provider value={themeContextMemo}>
        <Layout>
          <RestaurantsTabs
            currentId={restaurantId}
            onTabClick={onTabClickHandler}
          />
          {restaurantId && <Restaurant restaurantId={restaurantId} />}
        </Layout>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};
