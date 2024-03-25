import React, {FC} from 'react';
import {IIcon} from '~shared/ui/Icons/types/IIcon';

export const DropletIcon: FC<IIcon> = ({width = 26, height = 35, fill = '#fff', className}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 26 35'
      className={className}
    >
      <path
        fill={fill}
        d='M13 35c7.177 0 13-5.879 13-13.125S13 0 13 0 0 14.629 0 21.875 5.823 35 13 35zm5.863-17.5l-.765.773-8.666 8.75-.765.772-1.53-1.545.765-.773 8.666-8.75.765-.772 1.53 1.545zm-9.655-1.094c.431 0 .845.173 1.15.48a1.649 1.649 0 010 2.321 1.618 1.618 0 01-2.299 0 1.649 1.649 0 010-2.32c.305-.308.718-.48 1.15-.48zm7.584 7.657a1.61 1.61 0 011.149.48 1.643 1.643 0 01.476 1.16 1.656 1.656 0 01-.476 1.16 1.624 1.624 0 01-1.15.48 1.613 1.613 0 01-1.148-.48 1.64 1.64 0 01-.476-1.16 1.653 1.653 0 01.476-1.16 1.625 1.625 0 011.149-.48z'
      ></path>
    </svg>
  );
};
