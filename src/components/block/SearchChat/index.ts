import * as styles from './SearchChat.module.scss';

import { compileComponent, Component } from '../../../utils';
import template from './SearchChat';

interface ISearchChatProps {
  attr?: Record<string, string | number>;
  events?: Record<string, (event: Event) => void>;
}

class SearchChat extends Component<ISearchChatProps> {
  constructor(props: ISearchChatProps = {}) {
    super('div' , {
      attr: {
        class: styles.root
      },
      events: {
        input: (event) => {
          const target = event.target as HTMLInputElement;
          const titles = document.querySelectorAll('[data-name]')
          titles.forEach(title => {
            const parent = title?.parentElement?.parentElement;
            if (title.textContent?.toLowerCase().indexOf(target.value.toLowerCase()) !== -1) {
              parent?.classList.remove('hide');
            } else {
              parent?.classList.add('hide');
            }
          });
        }
      },
      ...props
    });
  }

  private templateNode(args: null | Record<string, string | string[]>) {
    return compileComponent(template, { ...args });
  }

  render() {
    return this.compile(this.templateNode, {})
  }
}

export default SearchChat;
