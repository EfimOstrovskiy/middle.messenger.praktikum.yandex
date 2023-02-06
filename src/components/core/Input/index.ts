import { compileComponent, Component } from '../../../utils';
import template from './Input';

interface IInputProps {
  className: string;
  placeholder: string;
  name: string;
  events?: Record<string, (event: Event) => void>
}

class Input extends Component<IInputProps> {
  constructor(props: IInputProps) {
    super(props);
  }

  private templateNode(args: null | Record<string, string | string[]>) {
    return compileComponent(template, { ...args });
  }

  render() {
    const { className, placeholder, name } = this.props;
    const type = name === 'password' ? 'password' : 'text';

    return this.compile(this.templateNode, { className, placeholder, type, name });
  }
}

export default Input;
