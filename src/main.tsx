import ReactDOM from 'react-dom/client';
import { restaurants } from './constants/mock';
import { Layout } from './components/layout/layout.component';
import { Restaurants } from './components/restaurants/restaurants.component';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <Layout>
    <Restaurants restaurants={restaurants} />
  </Layout>,
);
