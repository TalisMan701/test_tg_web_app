import React, {FC} from 'react';
import {IIcon} from '~shared/components/Icons/types/IIcon';

export const FlashIcon: FC<IIcon> = ({
  width = 31,
  height = 30,
  fill = '#FFFFFF',
  stroke = '#F0AD2C',
  className,
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      className={className}
      fill='none'
      viewBox='0 0 31 30'
    >
      <rect width='30' height='30' x='0.5' fill={fill} rx='15'></rect>
      <path
        fill={stroke}
        d='M15.5 6.67v16.66l-.8.91c-1.11 1.26-2.02.92-2.02-.76v-7.2H9.59c-1.4 0-1.79-.86-.86-1.91l6.77-7.7zM22.27 15.63l-6.77 7.7V6.67l.8-.91c1.11-1.26 2.02-.92 2.02.76v7.2h3.09c1.4 0 1.79.86.86 1.91z'
      ></path>
    </svg>
  );
};
