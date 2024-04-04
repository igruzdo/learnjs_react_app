import { useMemo, useState } from 'react';
import { RestaurantsTabs } from './components/restaurants-tabs/restaurants-tabs.component';
import { Layout } from './components/layout/layout.component';
import { restaurants } from './constants/mock';
import { Restaurant } from './components/restaurant/restaurant.component';
import { ThemeContext } from './context/theme.context';
import { useTheme } from './hooks/theme-hook/theme-hook';
import { UserContext } from './context/user.context';
import { useUserLoginLogout } from './hooks/user-hook/user-hook';

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

  const currentRestaurant = restaurants[currentRestaurantIndex];

  const onTabClickHandler = (index: number) =>
    setRestaurantIndex(setInLocalStorageRestaurantIndex(index));

  return (
    <UserContext.Provider value={userContextMemo}>
      <ThemeContext.Provider value={themeContextMemo}>
        <Layout>
          <RestaurantsTabs
            restaurants={restaurants}
            currentIndex={currentRestaurantIndex}
            onTabClick={onTabClickHandler}
          />
          {currentRestaurant && <Restaurant restaurant={currentRestaurant} />}
        </Layout>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};
