import React from 'react';

import { Logo } from '../../../logo';
import { PhoneCallButton } from '../../../phone-call-button';
import { Navbar } from './components/navbar';

export const HeaderDesktop = () => {
  return (
    <>
      <Logo />
      <Navbar />
      <PhoneCallButton />
    </>
  );
};
