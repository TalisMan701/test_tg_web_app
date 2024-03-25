import React, {FC} from 'react';
import {IIcon} from '~shared/ui/Icons/types/IIcon';

export const NewInfo: FC<IIcon> = ({
  width = 30,
  height = 30,
  fill = 'url(#paint0_linear_0_128)',
  className,
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 30 30'
      className={className}
    >
      <g clipPath='url(#clip0_0_128)'>
        <path
          fill={fill}
          d='M15 30a15 15 0 100-30 15 15 0 000 30zm-2.344-10.313h1.406v-3.75h-1.406c-.779 0-1.406-.627-1.406-1.406 0-.779.627-1.406 1.406-1.406h2.813c.779 0 1.406.627 1.406 1.406v5.156h.469c.779 0 1.406.627 1.406 1.407 0 .779-.627 1.406-1.406 1.406h-4.688c-.779 0-1.406-.627-1.406-1.406 0-.78.627-1.407 1.406-1.407zM15 7.5a1.875 1.875 0 110 3.75 1.875 1.875 0 010-3.75z'
        ></path>
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_0_128'
          x1='15'
          x2='15'
          y1='0'
          y2='30'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#0FF'></stop>
          <stop offset='1' stopColor='#319FE0'></stop>
        </linearGradient>
        <clipPath id='clip0_0_128'>
          <path fill='#fff' d='M0 0H30V30H0z'></path>
        </clipPath>
      </defs>
    </svg>
  );
};
