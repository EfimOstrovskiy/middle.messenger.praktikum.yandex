import { compileComponent, Component } from '../../utils';
import template from './Main';

interface IMain {
  chatsList: string
}

class Mains extends Component<IMain> {
  constructor(props: IMain) {
    super(props);
  }

  private templateNode(args: null | Record<string, string | string[]>) {
    return compileComponent(template, { ...args });
  }

  render() {
    const { chatsList } = this.props;

    return this.compile(this.templateNode, { chatsList })
  }
}

export default Mains;
