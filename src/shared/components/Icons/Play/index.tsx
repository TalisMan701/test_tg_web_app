import React, {FC} from 'react';
import {IIcon} from '~shared/ui/Icons/types/IIcon';

export const PlayIcon: FC<IIcon> = ({width = 10, height = 15, fill = '#FFF', className}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 10 15'
      className={className}
    >
      <path fill={fill} d='M.583.208L9.333 7.5l-8.75 7.292V.208z'></path>
    </svg>
  );
};
