import React, {FC} from 'react';
import classes from './Checkbox.module.scss';
import cx from 'classnames';

interface CheckboxProps {
  value: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string | React.ReactNode;
  className?: string;
  name: string;
}

export const Checkbox: FC<CheckboxProps> = ({value, onChange, label, className, name}) => {
  return (
    <label htmlFor={name} className={cx(classes.checkboxWrapper, className)}>
      <input id={name} type='checkbox' checked={value} onChange={onChange} />
      {label}
    </label>
  );
};
