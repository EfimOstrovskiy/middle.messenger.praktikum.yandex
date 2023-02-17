import * as styles from './Button.module.scss';

import { compileComponent, Component } from '../../../utils';
import template from './Button';
import cn from 'classnames';

interface IButtonProps {
  className: string;
  value: string | HTMLElement;
  theme?: string;
  attr?: Record<string, any>;
  events?: Record<string, (event: Event) => void>
}

class Button extends Component<IButtonProps> {
  constructor(props: IButtonProps) {
    const { theme = 'default', className } = props;
    const rootClassName = cn(styles.Root, className, {
      [styles.Transparent]: theme === 'transparent',
      [styles.Primary]: theme === 'default'
    });

    super('button', {
      attr: {
        type: 'Button',
        class: rootClassName,
      },
      ...props });
  }

  private templateNode(args: null | Record<string, string | string[]>) {
    return compileComponent(template, { ...args });
  }

  render() {
    const { value } = this.props;

    return this.compile(this.templateNode, { value })
  }
}

export default Button;
