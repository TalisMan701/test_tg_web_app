import React, {FC} from 'react';
import classes from './Navigation.module.scss';
import {NavigationProps} from './Navigation.types';
import cx from 'classnames';
import {Container} from '~shared/components/Container';
import {MainMenuIcon} from '~shared/components/Icons/MainMenuIcon';
import {StatsMenuIcon} from '~shared/components/Icons/StatsMenuIcon';
import {WalletMenuIcon} from '~shared/components/Icons/WalletMenuIcon';
import {PersonMenuIcon} from '~shared/components/Icons/PersonMenuIcon';

export const Navigation: FC<NavigationProps> = ({className}) => {
  return (
    <nav className={cx(className, classes.wrapper)}>
      <Container>
        <ul className={classes.links}>
          <li className={classes.link}>
            <MainMenuIcon />
          </li>
          <li className={classes.link}>
            <StatsMenuIcon />
          </li>
          <li className={classes.link}>
            <WalletMenuIcon />
          </li>
          <li className={classes.link}>
            <PersonMenuIcon />
          </li>
        </ul>
      </Container>
    </nav>
  );
};
