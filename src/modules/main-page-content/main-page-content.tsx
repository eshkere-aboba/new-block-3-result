import React from 'react';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

import { MainBenefits } from './components/main-benefits';
import { MainForm } from './components/main-form';
import { MainPackages } from './components/main-packages';
import { MainPromo } from './components/main-promo';
import { MainTeachers } from './components/main-teachers';

export const MainPageContent = () => {
  return (
    <>
      <Header />
      <main>
        <MainPromo />
        <MainBenefits />
        <MainTeachers />
        <MainPackages />
        <MainForm />
      </main>
      <Footer />
    </>
  );
};
