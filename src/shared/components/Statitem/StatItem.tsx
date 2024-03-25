import React, {FC} from 'react';
import classes from './StatItem.module.scss';
import {StatItemProps} from './StatItem.types.ts';
import cx from 'classnames';
import {Crown} from '~shared/components/Icons/Crown';
import {PersonOctagon} from '~shared/components/Icons/PersonOctagon';

export const StatItem: FC<StatItemProps> = ({className, theme, title, value, maxValue, icon}) => {
  const drawIcon = () => {
    switch (icon) {
      case 'person':
        return (
          <PersonOctagon fill={theme === 'main' ? '#F0AD2C' : '#8D75C5'} className={classes.icon} />
        );
      case 'crown':
        return <Crown fill={theme === 'main' ? '#F0AD2C' : '#8D75C5'} className={classes.icon} />;
      default:
        return null;
    }
  };

  const drawNumber = () => {
    let result = `${+value.toFixed(3)}`;

    if (maxValue) {
      result += `/${maxValue}`;
    }

    return result;
  };

  return (
    <div className={cx(className, classes.wrapper)}>
      <div className={classes.title}>{title}</div>
      <div className={classes.stats}>
        {drawIcon()}
        <span className={classes.numbers}>{drawNumber()}</span>
      </div>
    </div>
  );
};
