import * as styles from './Button.module.scss';

import { LiteComponent } from '../../../utils';
import template from './Button';
import cn from 'classnames';

const liteComponent = new LiteComponent();

const Button = (className, value, theme = 'default') => {
  const button = liteComponent.compileComponent(template);
  const rootClassName = cn(className, {
    [styles.Transparent]: theme === 'transparent',
    [styles.Primary]: theme === 'default'
  });

  return button({
    className: rootClassName,
    value
  });
};

export default Button;
