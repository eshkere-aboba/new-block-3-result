import { Container } from '@/components/container';
import { useWindowSize } from '@/hooks';

import { HeaderDesktop } from './devices/desktop';
import { HeaderMobile } from './devices/mobile';

import styles from './header.module.scss';

export const Header = () => {
  const { width } = useWindowSize();

  return (
    <header className={styles.header}>
      <Container isWide>
        <div className={styles.content}>{width <= 1024 ? <HeaderMobile /> : <HeaderDesktop />}</div>
      </Container>
    </header>
  );
};
