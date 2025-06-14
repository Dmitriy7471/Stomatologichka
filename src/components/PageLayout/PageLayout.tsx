import React from 'react';
import  Header  from '../header/header';
import { Footer } from '../Footer/Footer';
import './PageLayout.css';
import BottomHeader from '../header/bottom-header';
import { motion } from 'framer-motion';
interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="page-layout">
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Header />
        <BottomHeader/>
        <main>{children}</main>
        <Footer />
      </motion.div>
    </div>
  );
};


