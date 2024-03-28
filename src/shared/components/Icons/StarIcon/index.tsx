import React, {FC} from 'react';
import {IIcon} from '~shared/components/Icons/types/IIcon';

export const StarIcon: FC<IIcon> = ({width = 18, height = 16, fill = '#FFFFFF', className}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      className={className}
      fill='none'
      viewBox='0 0 18 16'
    >
      <path
        fill={fill}
        d='M13.932 9.933a.917.917 0 00-.266.809l.741 4.1a.9.9 0 01-.375.9.917.917 0 01-.975.066l-3.69-1.925a.942.942 0 00-.418-.109h-.225a.673.673 0 00-.225.075l-3.692 1.934a.973.973 0 01-.592.092.926.926 0 01-.741-1.06l.741-4.1A.933.933 0 003.95 9.9L.94 6.983a.9.9 0 01-.224-.941.936.936 0 01.741-.625l4.142-.601a.927.927 0 00.733-.508L8.157.567c.043-.084.1-.16.167-.225l.075-.059a.56.56 0 01.134-.108l.09-.033.142-.059h.351c.313.033.59.22.733.5l1.85 3.725a.926.926 0 00.691.508l4.142.6c.35.05.642.292.758.626.11.334.015.7-.241.941l-3.117 2.95z'
      ></path>
    </svg>
  );
};
