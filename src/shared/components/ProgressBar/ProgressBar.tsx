import React, {FC, useLayoutEffect, useRef, useState} from 'react';
import classes from './ProgressBar.module.scss';
import {ProgressBarProps} from './ProgressBar.types';
import cx from 'classnames';

export const ProgressBar: FC<ProgressBarProps> = ({className, progress}) => {
  const refWrapper = useRef<HTMLDivElement | null>(null);
  const [widthRect, setWidthRect] = useState(0);
  const [countRect, setCountRect] = useState(0);

  const isActive = (index: number) => {
    if (countRect === 0) return false;
    const countRectActive = Math.round((progress * countRect) / 100);

    return index + 1 <= countRectActive;
  };

  useLayoutEffect(() => {
    if (refWrapper.current) {
      console.log(refWrapper.current?.offsetHeight);
      const width = refWrapper.current.offsetWidth;
      const height = refWrapper.current.offsetHeight;

      const widthOneRect = height / 2;
      const widthOneRectWithMargin = height / 2 + 2;

      setWidthRect(widthOneRect);
      setCountRect(Math.floor(width / widthOneRectWithMargin));
    }
  }, []);

  return (
    <div ref={refWrapper} className={cx(className, classes.wrapper)}>
      {new Array(countRect).fill(0).map((value, index) => {
        return (
          <div
            style={{width: widthRect}}
            className={cx(classes.rect, isActive(index) && classes['rect-active'])}
            key={index}
          />
        );
      })}
    </div>
  );
};
