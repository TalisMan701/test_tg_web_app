import React, {FC} from 'react';
import {IIcon} from '~shared/ui/Icons/types/IIcon';

export const FacebookIcon: FC<IIcon> = ({width = 35, height = 36, fill = '#FFF', className}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 35 36'
      className={className}
    >
      <path
        fill={fill}
        d='M35 18.11C35 8.108 27.165 0 17.5 0S0 8.108 0 18.11C0 27.15 6.4 34.641 14.766 36V23.345h-4.444V18.11h4.444v-3.99c0-4.539 2.612-7.046 6.61-7.046 1.914 0 3.917.354 3.917.354v4.457h-2.207c-2.173 0-2.852 1.396-2.852 2.83v3.395h4.854l-.776 5.235h-4.078V36C28.6 34.641 35 27.15 35 18.11z'
      ></path>
    </svg>
  );
};
