import React, {FC} from 'react';
import {IIcon} from '~shared/ui/Icons/types/IIcon';

export const BurgerIcon: FC<IIcon> = ({height = 44, width = 32, fill = '#999', className}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 44 32'
      className={className}
    >
      <path
        fill={fill}
        fillRule='evenodd'
        d='M.667 2.667A2.667 2.667 0 013.333 0h37.334a2.667 2.667 0 110 5.333H3.333A2.667 2.667 0 01.667 2.667zM.667 16a2.667 2.667 0 012.666-2.667h37.334a2.667 2.667 0 110 5.334H3.333A2.667 2.667 0 01.667 16zm0 13.333a2.667 2.667 0 012.666-2.666h37.334a2.667 2.667 0 110 5.333H3.333a2.667 2.667 0 01-2.666-2.667z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};
