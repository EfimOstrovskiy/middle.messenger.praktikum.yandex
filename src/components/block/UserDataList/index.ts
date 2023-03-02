import * as styles from './UserDataList.module.scss';

import { compileComponent, Component } from '../../../utils';
import template from './UserDataList';
import cn from 'classnames';
import Input from '../../core/Input';
import { handleBlur, handleFocus } from '../../../utils/helpers';

interface IUserDataListProps {
  className: string;
  itemsInit: Record<string, string>[];
  readonly: string
  attr?: Record<string, any>;
  items?: Input | Input[]
}

class UserDataList extends Component<IUserDataListProps> {
  constructor(props: IUserDataListProps) {
    const { className } = props;
    const items = props.itemsInit.map((item) => {
      const { placeholder, name, value } = item;
      return new Input({
        className: '',
        placeholder,
        name,
        value,
        readonly: props.readonly,
        theme: 'profile',
        events: {
          focusin: (event) => {
            const target = event.target as HTMLInputElement;

            handleFocus(target, 'base');
          },
          focusout: (event) => {
            const target = event.target as HTMLInputElement;

            handleBlur(target, 'base');
          }
        }
      });
    });

    super('div', {
      attr: {
        class: cn(styles.Root, className)
      },
      items,
      ...props
    });
  }

  private templateNode(args: null | Record<string, string | string[]>) {
    return compileComponent(template, { ...args });
  }

  componentDidUpdate(oldProps: IUserDataListProps, newProps: IUserDataListProps) {
    if (oldProps !== newProps) {
      if (newProps['itemsInit']) {
        this.children.items = newProps['itemsInit'].map((item) => {
          const { placeholder, name, value } = item;
          return new Input({
            className: '',
            placeholder,
            name,
            value,
            readonly: newProps['readonly'],
            theme: 'profile',
          });
        });
      }
    }

    return oldProps !== newProps;
  }

  render() {
    const { className, items } = this.props;

    return this.compile(this.templateNode, { className, items })
  }
}

export default UserDataList;
