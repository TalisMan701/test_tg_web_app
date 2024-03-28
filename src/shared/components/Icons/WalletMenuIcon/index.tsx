import React, {FC} from 'react';
import {IIcon} from '~shared/components/Icons/types/IIcon';

export const WalletMenuIcon: FC<IIcon> = ({width = 30, height = 30, className}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      className={className}
      fill='none'
      viewBox='0 0 30 30'
    >
      <g clipPath='url(#clip0_2005_107)'>
        <path
          fill='url(#paint0_linear_2005_107)'
          d='M30.637 15c-.09 5.008-.97 9.036-3.49 11.48-2.444 2.521-6.472 3.4-11.48 3.49-5.008-.09-9.036-.969-11.48-3.49C1.666 24.036.787 20.008.696 15c.09-5.008.97-9.036 3.491-11.48C6.631 1 10.66.12 15.667.03c5.008.09 9.036.969 11.48 3.49 2.52 2.444 3.4 6.472 3.49 11.48z'
        ></path>
        <path
          fill='url(#paint1_radial_2005_107)'
          d='M30.637 15c-.09 5.008-.97 9.036-3.49 11.48-2.444 2.521-6.472 3.4-11.48 3.49-5.008-.09-9.036-.969-11.48-3.49C1.666 24.036.787 20.008.696 15c.09-5.008.97-9.036 3.491-11.48C6.631 1 10.66.12 15.667.03c5.008.09 9.036.969 11.48 3.49 2.52 2.444 3.4 6.472 3.49 11.48z'
        ></path>
        <path
          fill='url(#paint2_radial_2005_107)'
          d='M17.888 29.657c6.714 0 12.157-5.194 12.157-11.6 0-6.407-5.443-11.601-12.157-11.601s-12.156 5.193-12.156 11.6 5.442 11.6 12.156 11.6z'
        ></path>
        <path
          fill='#fff'
          d='M20.95 23.544H10.384a4.653 4.653 0 01-4.653-4.653V11.11a4.653 4.653 0 014.653-4.653h10.564a4.653 4.653 0 014.653 4.653v7.782a4.653 4.653 0 01-4.653 4.653z'
        ></path>
        <path
          fill='url(#paint3_radial_2005_107)'
          d='M20.95 23.544H10.384a4.653 4.653 0 01-4.653-4.653V11.11a4.653 4.653 0 014.653-4.653h10.564a4.653 4.653 0 014.653 4.653v7.782a4.653 4.653 0 01-4.653 4.653z'
        ></path>
        <path fill='#fff' d='M25.602 17.446h-5.04a2.446 2.446 0 010-4.892h5.04v4.892z'></path>
        <path
          fill='url(#paint4_linear_2005_107)'
          d='M20.642 14.148a.853.853 0 100 1.705.853.853 0 000-1.705z'
        ></path>
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_2005_107'
          x1='0.696'
          x2='30.637'
          y1='0.029'
          y2='0.029'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FBD79C'></stop>
          <stop offset='0.219' stopColor='#FCC680'></stop>
          <stop offset='0.749' stopColor='#FEA140'></stop>
          <stop offset='1' stopColor='#FF9227'></stop>
        </linearGradient>
        <radialGradient
          id='paint1_radial_2005_107'
          cx='0'
          cy='0'
          r='1'
          gradientTransform='translate(2.503 2.248) scale(21.4928)'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FFF9E1'></stop>
          <stop offset='0.273' stopColor='#FEEECB' stopOpacity='0.727'></stop>
          <stop offset='0.744' stopColor='#FCDDA9' stopOpacity='0.256'></stop>
          <stop offset='1' stopColor='#FBD79C' stopOpacity='0'></stop>
        </radialGradient>
        <radialGradient
          id='paint2_radial_2005_107'
          cx='0'
          cy='0'
          r='1'
          gradientTransform='translate(17.888 18.056) scale(11.8817)'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FF7029'></stop>
          <stop offset='0.31' stopColor='#FF652E' stopOpacity='0.69'></stop>
          <stop offset='0.845' stopColor='#FF493B' stopOpacity='0.155'></stop>
          <stop offset='1' stopColor='#FF4040' stopOpacity='0'></stop>
        </radialGradient>
        <radialGradient
          id='paint3_radial_2005_107'
          cx='0'
          cy='0'
          r='1'
          gradientTransform='matrix(9.26561 0 0 6.26355 22.848 15.054)'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FF902C'></stop>
          <stop offset='0.08' stopColor='#FF9A3F' stopOpacity='0.92'></stop>
          <stop offset='0.535' stopColor='#FFD0A5' stopOpacity='0.465'></stop>
          <stop offset='0.852' stopColor='#FFF2E6' stopOpacity='0.148'></stop>
          <stop offset='1' stopColor='#fff' stopOpacity='0'></stop>
        </radialGradient>
        <linearGradient
          id='paint4_linear_2005_107'
          x1='19.789'
          x2='21.495'
          y1='14.148'
          y2='14.148'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FBD79C'></stop>
          <stop offset='0.219' stopColor='#FCC680'></stop>
          <stop offset='0.749' stopColor='#FEA140'></stop>
          <stop offset='1' stopColor='#FF9227'></stop>
        </linearGradient>
        <clipPath id='clip0_2005_107'>
          <path fill='#fff' d='M0 0H30V30H0z' transform='translate(.667)'></path>
        </clipPath>
      </defs>
    </svg>
  );
};
