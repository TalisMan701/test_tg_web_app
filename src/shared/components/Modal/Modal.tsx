import React, {useEffect} from 'react';

import cx from 'classnames';

import classes from './Modal.module.scss';
import {ModalProps} from './Modal.types';
import {Portal} from '../Portal';
import {MODAL_PORTAL_ID} from '~shared/config/constants';
import {CloseIcon} from '~shared/ui/Icons/Close';

export const Modal: React.FC<ModalProps> = ({
  isOpen = false,
  children,
  className,
  onClose = () => {},
  width = 'xl',
  isFullWidth = false,
  contentClassName = '',
  contentWrapperClassName = '',
  iconPosition = 'absolute',
  toDown = false,
  closeTop = false,
}) => {
  useEffect(() => {
    const body = window.document.querySelector('body');
    if (isOpen && !className) {
      body?.classList.add('no-scroll');
    }

    return () => {
      body?.classList.remove('no-scroll');
    };
  }, [isOpen, className]);

  if (!isOpen) {
    return null;
  }

  return (
    <Portal selector={`#${MODAL_PORTAL_ID}`}>
      <div
        className={cx(className, classes.wrapper, {
          [classes.wrapper_open]: isOpen,
          [classes.wrapper_toDown]: toDown,
        })}
      >
        <div className={cx(classes.overlay)} onClick={onClose} role='presentation' />
        <div
          className={cx(
            classes.body,
            {
              [classes[`body_width-${width}`]]: true,
            },

            {
              [classes['body_full-size']]: isFullWidth,
            },
          )}
        >
          <button
            onClick={onClose}
            className={cx(classes.close, classes[`close_position_${iconPosition}`], {
              [classes.close_position_absolute_inTop]: closeTop,
            })}
            type='button'
          >
            <CloseIcon className={cx(classes.icon)} width={24} height={24} fill={'#999999'} />
          </button>
          <div
            className={cx(
              classes.content,
              {
                [classes['content_full-size']]: isFullWidth,
              },
              contentClassName,
            )}
            onClick={(e) => e.stopPropagation()}
            role='presentation'
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
