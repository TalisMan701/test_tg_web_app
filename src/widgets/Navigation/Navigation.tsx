import React, {FC} from 'react';
import classes from './Navigation.module.scss';
import {NavigationProps} from './Navigation.types';
import cx from 'classnames';

export const Navigation: FC<NavigationProps> = ({className}) => {
  return <div className={cx(classes, classes.wrapper)}></div>;
};
