import { FC, ReactNode } from 'react';
import { Footer } from './components/footer/footer.component';
import { Header } from './components/header/header.components';

interface LayoutProps {
  children: ReactNode[] | ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);
