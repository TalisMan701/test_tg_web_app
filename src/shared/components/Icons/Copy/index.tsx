import React, {FC} from 'react';
import {IIcon} from '~shared/ui/Icons/types/IIcon';

export const CopyIcon: FC<IIcon> = ({height = 22, width = 21, fill = '#C9C9C9', className}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 21 22'
      className={className}
    >
      <path
        fill={fill}
        fillRule='evenodd'
        d='M.083 2.333c0-1.196.933-2.166 2.084-2.166h10.416c1.15 0 2.084.97 2.084 2.166v4.334h4.166c1.15 0 2.084.97 2.084 2.166v10.834c0 1.196-.933 2.166-2.084 2.166H8.417c-1.15 0-2.084-.97-2.084-2.166v-4.334H2.167c-1.15 0-2.084-.97-2.084-2.166V2.333zm8.334 13v4.334h10.416V8.833h-4.166v4.334c0 1.196-.933 2.166-2.084 2.166H8.417zm4.166-2.166H2.167V2.333h10.416v10.834z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};
