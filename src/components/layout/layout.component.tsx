import { FC } from 'react';
import { Footer } from './components/footer/footer.component';
import { Header } from './components/header/header.components';
import { LayoutProps } from '../../types/layout.models';

export const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
