import * as styles from './Error.module.scss';

import { compileComponent, Component } from '../../../utils';
import template from './Error';
import Button from '../../core/Button';

interface IErrorProps {
  codeError: string;
  textError: string;
  attr?: Record<string, string | number>;
  back?: Button
}

export class Error extends Component<IErrorProps> {
  constructor(props: IErrorProps) {
    const back = new Button({
      className: styles.back,
      value: 'Назад к чатам',
      theme: 'transparent',
      type: 'button'
    });
    super('div', {
      attr: {
        class: styles.root
      },
      back,
      ...props
    });
  }

  private templateNode(args: null | Record<string, string | string[]>) {
    return compileComponent(template, { ...args });
  }

  render() {
    const { codeError, textError, back } = this.props;

    return this.compile(this.templateNode, { codeError, textError, back });
  }
}

export default Error;
