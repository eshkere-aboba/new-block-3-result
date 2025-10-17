import { PhoneIcon } from '@/assets/icons';
import { IconButton } from '@/components/icon-button';
import { useWindowSize } from '@/hooks';

import styles from './phone-call-button.module.scss';

const TEL_NUMBER = '88000001122';

interface PhoneCallButtonProps {
  isFromFooter?: boolean;
}

export const PhoneCallButton = ({ isFromFooter }: PhoneCallButtonProps) => {
  const { width } = useWindowSize();

  if (width <= 1024 && !isFromFooter) {
    return <IconButton icon={<PhoneIcon />} href={`tel:${TEL_NUMBER}`} />;
  }

  return (
    <a href={`tel:${TEL_NUMBER}`} className={styles.phoneCall}>
      +7 800 000 11 22
    </a>
  );
};
