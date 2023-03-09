import styles from './Button.module.scss';

import { compileComponent, Component } from '../../../utils';
import template from './Button';
import cn from 'classnames';

interface IButtonProps {
  className: string;
  value: string | HTMLElement;
  type: string;
  theme?: string;
  attr?: Record<string, string | number>;
  events?: Record<string, (event: Event) => void>
}

class Button extends Component<IButtonProps> {
  constructor(props: IButtonProps) {
    const { theme = 'default', className } = props;
    const rootClassName = cn(styles.root, className, {
      [styles.transparent]: theme === 'transparent',
      [styles.primary]: theme === 'default'
    });

    super('button', {
      attr: {
        type: props.type,
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
