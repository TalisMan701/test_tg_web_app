import React, {FC} from 'react';
import {IIcon} from '~shared/ui/Icons/types/IIcon';

export const VK: FC<IIcon> = ({width = 37, height = 37, fill = '#fff', className}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 37 37'
      className={className}
    >
      <g clipPath='url(#clip0_0_2159)'>
        <path
          fill={fill}
          fillRule='evenodd'
          d='M3.296 3.03C.766 5.562.766 9.635.766 17.78v1.44c0 8.146 0 12.219 2.53 14.75 2.53 2.53 6.603 2.53 14.75 2.53h1.44c8.145 0 12.218 0 14.749-2.53 2.53-2.531 2.53-6.604 2.53-14.75v-1.44c0-8.146 0-12.219-2.53-14.75C31.704.5 27.63.5 19.485.5h-1.44C9.9.5 5.826.5 3.295 3.03zm3.544 8.42c.195 9.36 4.875 14.985 13.08 14.985h.465V21.08c3.015.3 5.295 2.505 6.21 5.355h4.26c-1.17-4.26-4.245-6.615-6.165-7.515 1.92-1.11 4.62-3.81 5.265-7.47h-3.87c-.84 2.97-3.33 5.67-5.7 5.925V11.45h-3.87v10.38c-2.4-.6-5.43-3.51-5.565-10.38H6.84z'
          clipRule='evenodd'
        ></path>
      </g>
      <defs>
        <clipPath id='clip0_0_2159'>
          <path fill={fill} d='M0 0H36V36H0z' transform='translate(.765 .5)'></path>
        </clipPath>
      </defs>
    </svg>
  );
};
