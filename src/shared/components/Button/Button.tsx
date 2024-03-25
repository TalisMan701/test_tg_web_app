import React, {FC, ReactElement} from 'react';
import classes from './Button.module.scss';
import {ButtonProps, IButtonProps, ILinkProps} from './Button.types';
import cx from 'classnames';
import {Link} from 'react-router-dom';

export const Button: FC<ButtonProps> = ({
  className,
  tag = 'button',
  variant = 'primary',
  size = 'large',
  children,
  ...props
}): ReactElement => {
  const classNames = cx(
    classes.button,
    classes[`button--variant-${variant}`],
    classes[`button--size-${size}`],
    className,
  );
  if (tag === 'a') {
    const {href, ...rest} = props as ILinkProps;
    return (
      <a className={classNames} href={href} {...rest}>
        {children}
      </a>
    );
  }

  if (tag === 'link') {
    const {href = '', ...rest} = props as ILinkProps;
    return (
      <Link className={classNames} to={href} {...rest}>
        {children}
      </Link>
    );
  }

  const {customRef, ...rest} = props as IButtonProps;

  return (
    <button className={classNames} ref={customRef} {...rest}>
      {children}
    </button>
  );
};
