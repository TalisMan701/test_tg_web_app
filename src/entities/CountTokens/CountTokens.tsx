import React, {FC} from 'react';
import classes from './CountTokens.module.scss';
import {CountTokensProps} from './CountTokens.types';
import cx from 'classnames';
import {TokenIcon} from '~shared/components/Icons/TokenIcon';

export const CountTokens: FC<CountTokensProps> = ({
  className,
  count,
  theme = 'primary',
  size = 'l',
}) => {
  const getWidthIcon = () => {
    switch (size) {
      case 'l':
        return 36;
      case 'm':
        return 24;
      case 's':
        return 24;
    }
  };

  const getHeightIcon = () => {
    switch (size) {
      case 'l':
        return 36;
      case 'm':
        return 24;
      case 's':
        return 24;
    }
  };

  const getFillIcon = () => {
    switch (theme) {
      case 'primary':
        return '#FFFFFF';
      case 'secondary':
        return '#F0AD2C';
    }
  };

  return (
    <div
      className={cx(
        className,
        classes.wrapper,
        classes[`wrapper-size-${size}`],
        classes[`wrapper-theme-${theme}`],
      )}
    >
      <TokenIcon width={getWidthIcon()} height={getHeightIcon()} fill={getFillIcon()} />
      <span className={classes.count}>{count.toLocaleString('de-DE')}</span>
    </div>
  );
};
