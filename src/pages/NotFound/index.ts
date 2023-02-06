import { compileComponent, Component } from '../../utils';
import Error from '../../components/block/Error';
import template from './NotFound';

interface INotFoundProps {
  error?: Error
}

class NotFound extends Component<INotFoundProps> {
  constructor(props: INotFoundProps = {}) {
    const error = new Error({ codeError: '404', textError: 'Не туда попали'});
    super({ error, ...props });
  }

  private templateNode(args: null | Record<string, string | string[]>) {
    return compileComponent(template, { ...args });
  }

  render() {
    return this.compile(this.templateNode, { error: this.props.error })
  }
}

export default NotFound;
