import React, {FC} from 'react';
import {IIcon} from '~shared/ui/Icons/types/IIcon';

export const PokerSpadeIcon: FC<IIcon> = ({width = 37, height = 37, fill = '#FFF', className}) => {
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
        d='M18.5 3C13.812 10.75 6 13.85 6 21.6c0 3.1 3.125 6.2 6.25 6.2 1.563 0 3.125 0 4.688-1.55 0 0 .5 3.1-3.125 7.75h9.374c-3.125-4.65-3.125-7.75-3.125-7.75 1.563 1.55 3.125 1.55 4.688 1.55 3.125 0 6.25-3.1 6.25-6.2 0-7.75-7.813-10.85-12.5-18.6z'
      ></path>
    </svg>
  );
};
