import React, {FC} from 'react';
import {IIcon} from '~shared/ui/Icons/types/IIcon';

export const ArrowDown: FC<IIcon> = ({width = 10, height = 6, fill = '#999', className}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 10 6'
      className={className}
    >
      <path
        fill={fill}
        fillRule='evenodd'
        d='M1.088.808a.556.556 0 01.824 0L5 4.116 8.088.808a.556.556 0 01.824 0 .657.657 0 010 .884l-3.5 3.75a.556.556 0 01-.824 0l-3.5-3.75a.657.657 0 010-.884z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};
