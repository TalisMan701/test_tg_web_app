import React, {FC} from 'react';
import {IIcon} from '~shared/ui/Icons/types/IIcon';

export const Home: FC<IIcon> = ({
  width = 30,
  height = 30,
  fill = 'url(#paint0_linear_0_122)',
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
      <path
        fill={fill}
        d='M29.99 14.97c0 1.055-.782 1.882-1.667 1.882h-1.667l.037 9.386c0 .159-.01.317-.026.475v.943c0 1.295-.933 2.344-2.084 2.344h-.833c-.057 0-.115 0-.172-.006-.073.006-.146.006-.219.006h-2.942c-1.151 0-2.084-1.049-2.084-2.344V22.5c0-1.037-.744-1.875-1.666-1.875h-3.334c-.921 0-1.666.838-1.666 1.875v5.156c0 1.295-.933 2.344-2.084 2.344H6.672c-.078 0-.156-.006-.234-.012-.063.006-.125.012-.188.012h-.833c-1.151 0-2.084-1.049-2.084-2.344v-6.562c0-.053 0-.112.006-.164v-4.078H1.667C.729 16.852 0 16.032 0 14.97c0-.528.156-.996.52-1.406L13.876.469C14.24.059 14.656 0 15.021 0c.364 0 .781.117 1.094.41l13.302 13.155c.416.41.625.878.573 1.406z'
      ></path>
      <defs>
        <linearGradient
          id='paint0_linear_0_122'
          x1='14.999'
          x2='14.999'
          y1='0'
          y2='30'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#0FF'></stop>
          <stop offset='1' stopColor='#319FE0'></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};
