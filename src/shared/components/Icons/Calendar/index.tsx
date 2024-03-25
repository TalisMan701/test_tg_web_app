import React, {FC} from 'react';
import {IIcon} from '~shared/ui/Icons/types/IIcon';

export const CalendarIcon: FC<IIcon> = ({width = 32, height = 35, fill = '#FFF', className}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 32 35'
      className={className}
    >
      <path
        fill={fill}
        d='M10.857 1.64c0-.909-.764-1.64-1.714-1.64S7.429.731 7.429 1.64v2.735H4.57C2.05 4.375 0 6.337 0 8.75v21.875C0 33.038 2.05 35 4.571 35H27.43C29.95 35 32 33.038 32 30.625V8.75c0-2.413-2.05-4.375-4.571-4.375H24.57V1.641C24.571.73 23.807 0 22.857 0s-1.714.731-1.714 1.64v2.735H10.857V1.641zM3.43 13.126h5.714v3.828H3.429v-3.828zm0 7.11h5.714v4.374H3.429v-4.375zm9.142 0h6.858v4.374H12.57v-4.375zm10.286 0h5.714v4.374h-5.714v-4.375zm5.714-3.282h-5.714v-3.828h5.714v3.828zm0 10.938v2.734c0 .602-.514 1.094-1.142 1.094h-4.572V27.89h5.714zm-9.142 0v3.828H12.57V27.89h6.858zm-10.286 0v3.828H4.57c-.628 0-1.142-.492-1.142-1.094v-2.734h5.714zm10.286-10.938H12.57v-3.828h6.858v3.828z'
      ></path>
    </svg>
  );
};
