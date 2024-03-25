import React, {FC, useEffect} from 'react';
import classes from './MainLayout.module.scss';
import {MainLayoutProps} from './MainLayout.types';
import cx from 'classnames';
import {Outlet} from 'react-router-dom';

export const MainLayout: FC<MainLayoutProps> = ({className}) => {
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document?.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setVH();
    window.addEventListener('resize', setVH);
    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener('resize', setVH);
    };
  }, []);

  return (
    <div className={cx(className, classes.container)}>
      <Outlet />
    </div>
  );
};
