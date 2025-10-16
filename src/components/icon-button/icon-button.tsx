import type { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './icon-button.module.scss';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  onClick?: () => void;
  href?: string;
  additionalClassname?: string;
}

export const IconButton = ({
  icon,
  onClick,
  href,
  additionalClassname,
  ...rest
}: IconButtonProps) => {
  const createClassname = () => {
    const baseClassname = `${styles.iconButton}`;

    if (additionalClassname) {
      return `${baseClassname} ${additionalClassname}`;
    }

    return baseClassname;
  };

  if (href) {
    return (
      <a href={href} className={createClassname()} onClick={onClick}>
        {icon}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={createClassname()} {...rest}>
      {icon}
    </button>
  );
};
