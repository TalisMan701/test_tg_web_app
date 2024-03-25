import React, {FC} from 'react';
import {IIcon} from '~shared/components/Icons/types/IIcon';

export const PersonOctagon: FC<IIcon> = ({
  width = 22,
  height = 23,
  fill = '#F0AD2C',
  className,
}) => {
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
        d='M19.323 8.365v6.27a2.91 2.91 0 01-1.439 2.502l-5.445 3.145a2.9 2.9 0 01-2.887 0l-5.445-3.145a2.887 2.887 0 01-1.44-2.502v-6.27c0-1.027.55-1.98 1.44-2.503l5.445-3.144a2.9 2.9 0 012.887 0l5.445 3.144a2.898 2.898 0 011.44 2.503z'
        opacity='0.4'
      ></path>
      <path
        fill={fill}
        d='M11 11.5a2.136 2.136 0 100-4.272 2.136 2.136 0 000 4.272zM13.457 15.772a.92.92 0 00.76-1.44c-.623-.925-1.833-1.549-3.217-1.549-1.384 0-2.594.624-3.218 1.55a.92.92 0 00.761 1.439h4.914z'
      ></path>
    </svg>
  );
};
