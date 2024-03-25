import React, {FC} from 'react';
import {IIcon} from '~shared/ui/Icons/types/IIcon';

export const PokerHeartIcon: FC<IIcon> = ({width = 37, height = 37, fill = '#FFF', className}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 37 37'
      className={className}
    >
      <path
        fill={fill}
        d='M18.5 33l-2.247-2.014C8.27 23.86 3 19.145 3 13.392 3 8.677 6.751 5 11.525 5c2.697 0 5.286 1.236 6.975 3.174C20.19 6.236 22.778 5 25.475 5 30.249 5 34 8.677 34 13.392c0 5.753-5.27 10.468-13.253 17.594L18.5 33z'
      ></path>
    </svg>
  );
};
