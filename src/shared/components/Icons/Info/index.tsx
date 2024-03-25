import React, {FC} from 'react';
import {IIcon} from '~shared/ui/Icons/types/IIcon';

export const InfoIcon: FC<IIcon> = ({width = 35, height = 35, fill = '#FFF', className}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 35 35'
      className={className}
    >
      <path
        fill={fill}
        d='M17.5 35a17.5 17.5 0 100-35 17.5 17.5 0 000 35zm-2.734-12.031h1.64v-4.375H13.125v-3.282H19.687v7.657h2.188v3.281h-8.75v-3.281h1.64zm4.921-9.844h-4.375V8.75h4.376v4.375z'
      ></path>
    </svg>
  );
};
