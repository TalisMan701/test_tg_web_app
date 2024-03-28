import React, {FC} from 'react';
import classes from './SimulatorCard.module.scss';
import {SimulatorCardProps} from './SimulatorCard.types';
import cx from 'classnames';
import {Button} from '~shared/components/Button';
import {convertPriceToString} from '~shared/utils/convertPriceToString.ts';
import {FlashIcon} from '~shared/components/Icons/FlashIcon';

export const SimulatorCard: FC<SimulatorCardProps> = ({
  className,
  img,
  isBuy,
  price,
  tokensToMin,
  isActive,
}) => {
  console.log(isBuy, isActive, price);
  return (
    <div className={cx(className, classes.wrapper)}>
      <img
        src={img}
        alt='simulator'
        className={cx(classes.img, !isBuy && classes['img-not-active'])}
      />
      <div className={classes.content}>
        <span className={classes.title}>{`${convertPriceToString(
          tokensToMin,
        )} токенов в 1 минуту`}</span>
        <span className={classes.subTitle}>{`60 мин/${convertPriceToString(
          tokensToMin * 60,
        )}т`}</span>
        <Button className={classes.btn} size={'medium'} variant={!isBuy ? 'primary' : 'secondary'}>
          {isBuy ? (
            isActive ? (
              'Остановить'
            ) : (
              'Запустить'
            )
          ) : (
            <div className={classes.btnInner}>
              <FlashIcon width={24} height={24} />
              <span className={classes.price}>{convertPriceToString(price)}</span>
              <span className={classes.profit}>x1.2</span>
            </div>
          )}
        </Button>
      </div>
    </div>
  );
};
