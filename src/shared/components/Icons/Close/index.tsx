import React, {FC} from 'react';
import {IIcon} from '~shared/ui/Icons/types/IIcon';

export const CloseIcon: FC<IIcon> = ({height = 29, width = 28, fill = '#FFF', className}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 28 29'
      className={className}
    >
      <path
        fill={fill}
        fillRule='evenodd'
        d='M.586 1.086a2 2 0 012.828 0L14 11.672 24.586 1.086a2 2 0 112.828 2.828L16.828 14.5l10.586 10.586a2 2 0 11-2.828 2.828L14 17.328 3.414 27.914a2 2 0 11-2.828-2.828L11.172 14.5.586 3.914a2 2 0 010-2.828z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};
