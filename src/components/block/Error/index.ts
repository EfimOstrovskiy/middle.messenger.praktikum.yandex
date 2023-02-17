import * as styles from './Error.module.scss';

import { compileComponent, Component } from '../../../utils';
import template from './Error';
import Button from '../../core/Button';

interface IErrorProps {
  codeError: string;
  textError: string;
  attr?: Record<string, any>;
  back?: Button
}

export class Error extends Component<IErrorProps> {
  constructor(props: IErrorProps) {
    const back = new Button({
      className: styles.Back,
      value: 'Назад к чатам',
      theme: 'transparent',
    });
    super('div', {
      attr: {
        class: styles.Root
      },
      back,
      ...props
    });
  }

  private templateNode(args: null | Record<string, string | string[]>) {
    return compileComponent(template, { ...args });
  }

  render() {
    const { codeError, textError } = this.props;

    return this.compile(this.templateNode, { codeError, textError, back: this.props.back });
  }
}

export default Error;
