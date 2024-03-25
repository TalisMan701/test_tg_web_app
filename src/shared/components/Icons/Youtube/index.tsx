import React, {FC} from 'react';
import {IIcon} from '~shared/ui/Icons/types/IIcon';

export const Youtube: FC<IIcon> = ({width = 38, height = 28, fill = '#FFF', className}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 39 28'
      className={className}
    >
      <path style={{fill: '#1B1B24'}} d='M15.6 19.831V8.17L25.74 14 15.6 19.831z'></path>
      <path
        fill={fill}
        d='M38.177 4.647a4.853 4.853 0 00-1.26-2.173 4.88 4.88 0 00-2.18-1.255C31.701.4 19.5.4 19.5.4S7.3.4 4.263 1.219a4.879 4.879 0 00-2.18 1.255 4.853 4.853 0 00-1.26 2.173A49.964 49.964 0 000 14c-.02 3.137.255 6.268.822 9.354.222.821.656 1.57 1.26 2.172a4.88 4.88 0 002.18 1.255C7.299 27.6 19.5 27.6 19.5 27.6s12.2 0 15.237-.819a4.88 4.88 0 002.18-1.255 4.854 4.854 0 001.26-2.172A49.96 49.96 0 0039 14a49.96 49.96 0 00-.822-9.353zM15.6 19.829V8.17L25.726 14 15.6 19.829z'
      ></path>
    </svg>
  );
};
