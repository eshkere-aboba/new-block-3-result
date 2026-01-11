import React from 'react';

import { teachersImages } from '@/assets/images';
import { Button } from '@/components/button';

import styles from './teacher-card.module.scss';

interface TeacherCardProps {
  image: string;
  name: string;
  role: string;
}

export const TeacherCard = ({ image, name, role }: TeacherCardProps) => {
  return (
    <div className={styles.teacherCard}>
      <img className={styles.image} src={teachersImages[image]} alt={`${name} ${role}`} />
      <div className={styles.description}>
        <div className={styles.title}>{name}</div>
        <div className={styles.role}>{role}</div>
        <Button variant="text" additionalClassname={styles.button}>
          Подробнее
        </Button>
      </div>
    </div>
  );
};
