import React from 'react';
import  Header  from '../header/header';
import { Footer } from '../Footer/Footer';
import './PageLayout.css';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="page-layout">
      <Header />
      <main className="page-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};