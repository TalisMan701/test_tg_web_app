import React, {FC} from 'react';
import {IIcon} from '~shared/ui/Icons/types/IIcon';

export const StarIcon: FC<IIcon> = ({width = 37, height = 35, fill = '#FFF', className}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 37 35'
      className={className}
    >
      <path
        fill={fill}
        d='M18.5 0l5.945 11.21L37 13.372l-8.886 9.085L29.928 35 18.5 29.408 7.065 35l1.814-12.544L0 13.371l12.549-2.16L18.5 0z'
      ></path>
    </svg>
  );
};
