import React, {FC} from 'react';
import {IIcon} from '~shared/ui/Icons/types/IIcon';

export const PlayGradIcon: FC<IIcon> = ({width = 12, height = 20, fill = '#FFF', className}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 12 20'
      className={className}
    >
      <path fill='url(#paint0_linear_214_55)' d='M0 0l12 10L0 20V0z'></path>
      <defs>
        <linearGradient
          id='paint0_linear_214_55'
          x1='0'
          x2='12'
          y1='10'
          y2='10'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#16D3C2'></stop>
          <stop offset='1' stopColor='#4A76F5'></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};
