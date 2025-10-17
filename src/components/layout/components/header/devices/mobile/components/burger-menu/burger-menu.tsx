import React from 'react';

import { CloseIcon } from '@/assets/icons';
import { IconButton } from '@/components/icon-button';
import { Link } from '@/components/link';

import { NAVBAR_ITEMS } from '../../../../constants';

import styles from './burger-menu.module.scss';

interface BurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BurgerMenu = ({ isOpen, onClose }: BurgerMenuProps) => {
  return (
    <div className={styles.burgerMenu}>
      <nav id="burger-menu" role="menu" aria-hidden={!isOpen} className={styles.navbar}>
        <ul className={styles.menu}>
          {NAVBAR_ITEMS.map((navbarItem) => (
            <li key={navbarItem.id}>
              <Link href={`${navbarItem.href}`} onClick={onClose} additionalClassname={styles.link}>
                {navbarItem.title}
              </Link>
            </li>
          ))}
        </ul>

        <IconButton
          icon={<CloseIcon />}
          onClick={onClose}
          additionalClassname={styles.closeButton}
          aria-label="Закрыть меню"
        />
      </nav>
    </div>
  );
};
