import React, {FC} from 'react';
import classes from './Header.module.scss';
import {HeaderProps} from './Header.types';
import cx from 'classnames';
import Logo from '~shared/assets/images/svg/logo.svg?react';
import {Container} from '~shared/components/Container';
import {StatItem} from '~shared/components/Statitem';

export const Header: FC<HeaderProps> = ({className}) => {
  return (
    <header className={cx(className, classes.wrapper)}>
      <Container className={classes.container}>
        <Logo />
        <div className={classes.statsWrapper}>
          <StatItem
            title={'Участников:'}
            value={89}
            maxValue={100}
            icon={'person'}
            theme={'main'}
          />
          <StatItem title={'Рейтинг:'} value={1.257} icon={'crown'} theme={'main'} />
        </div>
      </Container>
    </header>
  );
};
