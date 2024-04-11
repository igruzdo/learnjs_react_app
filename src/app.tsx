import { useEffect, useMemo, useState } from 'react';
import { RestaurantsTabs } from './components/restaurants-tabs/restaurants-tabs.component';
import { Layout } from './components/layout/layout.component';
import { Restaurant } from './components/restaurant/restaurant.component';
import { ThemeContext } from './context/theme.context';
import { useTheme } from './hooks/theme-hook/theme-hook';
import { UserContext } from './context/user.context';
import { useUserLoginLogout } from './hooks/user-hook/user-hook';
import { useSelector } from 'react-redux';
import { AppStore } from './types/store';
import { useDispatch } from 'react-redux';
import { getRestaurants } from './redux/enities/restaurant/thunks/get-restaurant.thunk';
import { Dispatch } from '@reduxjs/toolkit';
import { getUsers } from './redux/enities/user/thunks/get-users.thunk';

const getFromLocalStorageRestaurantIndex = (): string | null =>
  localStorage.getItem('currentRestaurantId');

const setInLocalStorageRestaurantId = (id: string) => () => {
  localStorage.setItem('currentRestaurantId', id);
  return id;
};

export const App = () => {
  const restaurantsIds = useSelector<AppStore, string[]>(
    (state) => state.restaurant.ids,
  );
  const [currentRestaurantId, setRestaurantId] = useState(
    getFromLocalStorageRestaurantIndex,
  );

  const dispatch = useDispatch<Dispatch<any>>();

  useEffect(() => {
    dispatch(getRestaurants());
    dispatch(getUsers());
  }, []);

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
    setRestaurantId(setInLocalStorageRestaurantId(id));

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
