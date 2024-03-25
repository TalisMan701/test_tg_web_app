import {ReactNode} from 'react';

export interface StatItemProps {
  className?: string;
  title: string;
  value: number;
  maxValue?: number;
  theme?: 'main' | 'second';
  icon: 'person' | 'crown';
}
