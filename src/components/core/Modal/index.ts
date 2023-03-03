import * as styles from './Modal.module.scss';

import { compileComponent, Component } from '../../../utils';
import Button from '../Button';
import template from './Modal';

import CLOSE_ICON from '../../../../public/images/icons/close.svg';

interface IModalProps {
  attr?: Record<string, any>;
  content: any;
  close?: Button
}

class Modal extends Component<IModalProps> {
  constructor(props: IModalProps) {
    const close = new Button({
      className: styles.close,
      value: `<img src="${CLOSE_ICON}" alt="Закрыть окно" />`,
      theme: 'transparent',
      events: {
        click: () => {
          this.hide();
        }
      }
    });

    super('div', {
      attr: {
        class: styles.root
      },
      close,
      ...props
    });
  }

  private templateNode(args: null | Record<string, string | string[]>) {
    return compileComponent(template, { ...args });
  }

  componentDidUpdate(oldProps: IModalProps, newProps: IModalProps): boolean {
    if (oldProps['content'] !== newProps['content']) {
      this.children.content = newProps['content'];
    }

    return oldProps['content'] !== newProps['content'];
  }

  render() {
    const { content } = this.props;

    return this.compile(this.templateNode, { content })
  }
}

export default Modal;
