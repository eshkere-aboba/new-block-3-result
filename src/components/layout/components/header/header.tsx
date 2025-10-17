import { Container } from '@/components/container';

import { Logo } from '../logo';
import { PhoneCallButton } from '../phone-call-button';
import { Navbar } from './components/navbar';

import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container isWide>
        <div className={styles.content}>
          <Logo />
          <Navbar />
          <PhoneCallButton />
        </div>
      </Container>
    </header>
  );
};
