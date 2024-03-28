import React, {FC} from 'react';
import {IIcon} from '~shared/components/Icons/types/IIcon';

export const StatsMenuIcon: FC<IIcon> = ({width = 30, height = 30, className}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      className={className}
      fill='none'
      viewBox='0 0 30 30'
    >
      <g clipPath='url(#clip0_2005_462)'>
        <path
          fill='url(#paint0_linear_2005_462)'
          d='M30.304 15c-.09 5.008-.97 9.036-3.491 11.48-2.444 2.521-6.472 3.4-11.48 3.49-5.008-.09-9.035-.969-11.48-3.49C1.334 24.036.454 20.008.364 15c.09-5.008.97-9.036 3.49-11.48C6.299 1 10.326.12 15.334.03c5.008.09 9.036.969 11.48 3.49 2.521 2.444 3.4 6.472 3.491 11.48z'
        ></path>
        <path
          fill='url(#paint1_radial_2005_462)'
          d='M30.304 15c-.09 5.008-.97 9.036-3.491 11.48-2.444 2.521-6.472 3.4-11.48 3.49-5.008-.09-9.035-.969-11.48-3.49C1.334 24.036.454 20.008.364 15c.09-5.008.97-9.036 3.49-11.48C6.299 1 10.326.12 15.334.03c5.008.09 9.036.969 11.48 3.49 2.521 2.444 3.4 6.472 3.491 11.48z'
        ></path>
        <path
          fill='url(#paint2_radial_2005_462)'
          d='M20.344 28.107c5.308 0 9.611-4.782 9.611-10.682S25.652 6.744 20.344 6.744c-5.309 0-9.612 4.782-9.612 10.681 0 5.9 4.303 10.682 9.612 10.682z'
        ></path>
        <path
          fill='#fff'
          d='M16.585 7.502l1.65 3.157a1.413 1.413 0 001.016.74l3.512.592c1.125.19 1.572 1.566.773 2.38l-2.493 2.545a1.414 1.414 0 00-.388 1.195l.521 3.524c.167 1.128-1.004 1.979-2.025 1.471l-3.19-1.585a1.412 1.412 0 00-1.257 0l-3.19 1.585c-1.022.508-2.193-.342-2.026-1.471l.522-3.524c.064-.437-.08-.88-.389-1.195l-2.493-2.544c-.798-.815-.351-2.191.774-2.381l3.512-.593a1.412 1.412 0 001.016-.739l1.65-3.157c.53-1.011 1.977-1.011 2.505 0z'
        ></path>
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_2005_462'
          x1='3.757'
          x2='26.803'
          y1='3.423'
          y2='26.47'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FF8C8D'></stop>
          <stop offset='0.291' stopColor='#FF7A7B'></stop>
          <stop offset='0.875' stopColor='#FF4B4B'></stop>
          <stop offset='1' stopColor='#FF4040'></stop>
        </linearGradient>
        <radialGradient
          id='paint1_radial_2005_462'
          cx='0'
          cy='0'
          r='1'
          gradientTransform='translate(2.528 2.666) scale(18.7235)'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FFC2C2'></stop>
          <stop offset='1' stopColor='#FFC2C2' stopOpacity='0'></stop>
        </radialGradient>
        <radialGradient
          id='paint2_radial_2005_462'
          cx='0'
          cy='0'
          r='1'
          gradientTransform='matrix(9.61337 0 0 10.6815 20.349 17.425)'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#821818'></stop>
          <stop offset='0.387' stopColor='#B42828' stopOpacity='0.613'></stop>
          <stop offset='1' stopColor='#FF4040' stopOpacity='0'></stop>
        </radialGradient>
        <clipPath id='clip0_2005_462'>
          <path fill='#fff' d='M0 0H30V30H0z' transform='translate(.333)'></path>
        </clipPath>
      </defs>
    </svg>
  );
};
