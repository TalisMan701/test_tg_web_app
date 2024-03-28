import React, {FC} from 'react';
import {IIcon} from '~shared/components/Icons/types/IIcon';

export const ClockIcon: FC<IIcon> = ({
  width = 22,
  height = 22,
  fill = '#56A4FE',
  stroke = '#FFFFFF',
  className,
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      className={className}
      fill='none'
      viewBox='0 0 22 22'
    >
      <path fill={fill} d='M11 20.167a9.167 9.167 0 100-18.334 9.167 9.167 0 000 18.334z'></path>
      <path
        fill={stroke}
        d='M14.4 14.602a.614.614 0 01-.348-.1l-2.841-1.696c-.706-.422-1.229-1.348-1.229-2.163V6.883c0-.376.312-.687.688-.687.376 0 .687.311.687.687v3.758c0 .33.275.816.56.981l2.841 1.696c.33.193.431.614.239.944a.706.706 0 01-.596.34z'
      ></path>
    </svg>
  );
};
