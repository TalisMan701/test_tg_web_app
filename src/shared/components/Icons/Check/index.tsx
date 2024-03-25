import React, {FC} from 'react';
import {IIcon} from '~shared/ui/Icons/types/IIcon';

export const CheckIcon: FC<IIcon> = ({width = 19, height = 15, fill = '#FFF', className}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 19 15'
      className={className}
    >
      <path
        fill={fill}
        fillRule='evenodd'
        d='M18.525.472c.43.382.47 1.04.087 1.47L7.5 14.442a1.042 1.042 0 01-1.557 0L.388 8.192a1.042 1.042 0 011.557-1.384l4.777 5.374L17.055.558a1.042 1.042 0 011.47-.086z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};
