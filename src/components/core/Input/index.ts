import * as styles from './Input.module.scss';

import { compileComponent, Component } from '../../../utils';
import template from './Input';
import cn from "classnames";

interface IInputProps {
  className: string;
  placeholder: string;
  name: string;
  value: string;
  readonly?: string;
  theme?: string;
  attr?: Record<string, string | number>;
  events?: Record<string, (event: Event) => void>
}

class Input extends Component<IInputProps> {
  constructor(props: IInputProps) {
    const { className, theme = 'auth' } = props;
    const rootClassName = cn(className, styles.root, {
      [styles.auth]: theme === 'auth',
      [styles.profile]: theme === 'profile'
    });
    super('div', {
      attr: {
        class: rootClassName,
      },
      ...props
    });
  }

  private templateNode(args: null | Record<string, string | string[]>) {
    return compileComponent(template, { ...args });
  }

  render() {
    const { placeholder, name, value, readonly = '' } = this.props;
    const type = name === 'password'
      || name === 'oldPassword'
      || name === 'newPassword' ? 'password' : 'text';

    return this.compile(this.templateNode, { placeholder, type, name, value, readonly });
  }
}

export default Input;
