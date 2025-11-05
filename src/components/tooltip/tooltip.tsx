import { type ReactNode, useState } from 'react';

import { TooltipIcon } from '@/assets/icons';

import styles from './tooltip.module.scss';

interface TooltipProps {
  text: string;
  icon?: ReactNode;
}

export const Tooltip = ({ text, icon }: TooltipProps) => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsTextVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTextVisible(false);
  };

  return (
    <span
      className={styles.tooltip}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={`${styles.icon}`}>{icon ? icon : <TooltipIcon />}</span>
      {isTextVisible && <span className={`${styles.text}`}>{text}</span>}
    </span>
  );
};
