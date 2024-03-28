import React, {FC} from 'react';
import classes from './LevelIndicator.module.scss';
import {LevelIndicatorProps} from './LevelIndicator.types';
import cx from 'classnames';
import {StarIcon} from '~shared/components/Icons/StarIcon';

export const LevelIndicator: FC<LevelIndicatorProps> = ({className, level}) => {
  const getColor = (position: number) => {
    return level >= position ? '#F0AD2C' : '#FFFFFF';
  };

  return (
    <div className={cx(className, classes.wrapper)}>
      <p className={classes.text}>
        Уровень <span>{level}</span>
      </p>
      <ul className={classes.stars}>
        <li className={classes.star}>
          <StarIcon fill={getColor(1)} />
        </li>
        <li className={classes.star}>
          <StarIcon fill={getColor(2)} />
        </li>
        <li className={classes.star}>
          <StarIcon fill={getColor(3)} />
        </li>
        <li className={classes.star}>
          <StarIcon fill={getColor(4)} />
        </li>
        <li className={classes.star}>
          <StarIcon fill={getColor(5)} />
        </li>
      </ul>
    </div>
  );
};
