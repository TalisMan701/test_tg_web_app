import React, {FC} from 'react';
import classes from './MainSection.module.scss';
import {MainSectionProps} from './MainSection.types';
import cx from 'classnames';
import {LevelIndicator} from '~entities/LevelIndicator';
import {CountTokens} from '~entities/CountTokens';
import {TimeIndicator} from '~entities/TimeIndicator';
import {Button} from '~shared/components/Button';
import {FlashIcon} from '~shared/components/Icons/FlashIcon';
import {Container} from '~shared/components/Container';
import BGImage from '~shared/assets/images/bg.jpg';
import MenLVL1Image from '~shared/assets/images/heroes/men/lvl-1.png';
import BtnToTrenImage from '~shared/assets/images/btnToTren.png';
import {NavLink} from 'react-router-dom';

export const MainSection: FC<MainSectionProps> = ({className}) => {
  return (
    <section className={cx(className, classes.wrapper)}>
      <Container className={classes.content}>
        <div className={classes.stats}>
          <LevelIndicator level={3} />
          <CountTokens count={1920240} />
        </div>
        <TimeIndicator />
        <div className={classes.btnBuyWrapper}>
          <Button className={classes.btnBuy}>
            <FlashIcon />
            <p>
              8.000 <span>Ур.2</span>
            </p>
          </Button>
        </div>
        <img className={classes.heroImg} src={MenLVL1Image} alt='hero' />
        <NavLink to={'/simulators'} className={classes.btnToTren}>
          <img src={BtnToTrenImage} alt='btnToTren' />
        </NavLink>
      </Container>
      <div style={{backgroundImage: `url(${BGImage})`}} className={classes.background} />
    </section>
  );
};
