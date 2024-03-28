import React, {FC} from 'react';
import classes from './TimeIndicator.module.scss';
import {TimeIndicatorProps} from './TimeIndicator.types';
import cx from 'classnames';
import {ProgressBar} from '~shared/components/ProgressBar';
import {ClockIcon} from '~shared/components/Icons/ClockIcon';

export const TimeIndicator: FC<TimeIndicatorProps> = ({className}) => {
  return (
    <div className={cx(className, classes.wrapper)}>
      <div className={classes.time}>
        <ClockIcon />
        <span className={classes.text}>60м</span>
      </div>
      <ProgressBar progress={30} />
    </div>
  );
};
