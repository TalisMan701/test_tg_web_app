import React, {FC, useMemo, useState} from 'react';
import {VirtualizedListProps} from './VirtualizedNumberList.types';
import classes from './VirtualizedNumberList.module.scss';
import cx from 'classnames';
import throttle from 'lodash.throttle';
export const VirtualizedNumberList: FC<VirtualizedListProps> = ({
  className,
  itemsCount,
  itemHeight,
  windowHeight,
}) => {
  const [scrollTop, setScrollTop] = useState<number>(0);
  const innerHeight = itemsCount * itemHeight;
  const visibleItems = Math.ceil(windowHeight / itemHeight) + 2;

  const getVisibleRange = () => {
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(itemsCount, startIndex + visibleItems);
    return {startIndex, endIndex};
  };

  const renderItems = () => {
    const {startIndex, endIndex} = getVisibleRange();
    const items = [];

    for (let i = startIndex; i < endIndex; i++) {
      items.push(
        <li
          key={i}
          className={cx(classes.list__item, !((i + 1) % 2) && classes['list__item--even'])}
          style={{
            height: itemHeight,
            top: i * itemHeight,
          }}
        >
          {i + 1}
        </li>,
      );
    }

    return items;
  };

  /* const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    console.log(e.currentTarget);
    setScrollTop(e.currentTarget.scrollTop);
  };*/

  const handleScroll = useMemo(
    () =>
      throttle((e: React.UIEvent<HTMLDivElement>) => {
        if (e.target instanceof HTMLDivElement) {
          setScrollTop(e.target.scrollTop);
        }
      }, 50),
    [],
  );

  return (
    <div
      className={cx(className, classes.window)}
      style={{height: windowHeight}}
      onScroll={handleScroll}
    >
      <ul className={classes.list} style={{height: `${innerHeight}px`}}>
        {renderItems()}
      </ul>
    </div>
  );
};
