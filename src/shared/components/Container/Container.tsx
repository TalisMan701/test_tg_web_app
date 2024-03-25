import React, {FC} from 'react';

import cx from 'classnames';

import classes from './Container.module.scss';
import {ContainerProps} from './Container.types.ts';

export const Container: FC<ContainerProps> = ({children, className}) => (
  <div className={cx(classes.container, className)}>{children}</div>
);
