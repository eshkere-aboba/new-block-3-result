import { Tooltip } from '@/components/tooltip/tooltip';
import type { BenefitItemType } from '@/types/benefits';

import styles from './benefits-item.module.scss';

interface BenefitItemProps {
  benefitItem: BenefitItemType;
}

export const BenefitsItem = ({
  benefitItem: { subtitle, description, tooltip },
}: BenefitItemProps) => {
  const hasTooltip = tooltip && tooltip?.trim().length > 0;

  return (
    <li className={styles.item}>
      <article className={styles.content}>
        <h3 className={styles.title}>
          {subtitle}
          {hasTooltip && <Tooltip text={tooltip} />}
        </h3>
        <p className={styles.text}>{description}</p>
      </article>
    </li>
  );
};
