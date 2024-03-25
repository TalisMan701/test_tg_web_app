import React, {FC} from 'react';
import {IIcon} from '~shared/components/Icons/types/IIcon';

export const Crown: FC<IIcon> = ({width = 22, height = 23, fill = '#F0AD2C', className}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      className={className}
      fill='none'
      viewBox='0 0 22 23'
    >
      <path
        fill={fill}
        d='M20.167 5.734v8.782a4.585 4.585 0 01-4.584 4.583H6.417c-.422 0-.825-.055-1.22-.165-.568-.156-.751-.88-.33-1.302l9.745-9.744c.201-.201.504-.247.788-.192a.966.966 0 00.843-.248L18.6 5.083c.862-.861 1.568-.577 1.568.651z'
      ></path>
      <path
        fill={fill}
        d='M13.42 7.247l-9.598 9.597a.92.92 0 01-1.466-.22 4.408 4.408 0 01-.523-2.108V5.734c0-1.228.706-1.512 1.568-.65l2.365 2.373a.941.941 0 001.301 0l3.282-3.29a.924.924 0 011.302 0l1.778 1.778a.933.933 0 01-.01 1.302z'
        opacity='0.4'
      ></path>
    </svg>
  );
};
