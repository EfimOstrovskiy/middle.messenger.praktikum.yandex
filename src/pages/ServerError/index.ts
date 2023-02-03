import { compileComponent, Component } from '../../utils';
import Error from '../../components/block/Error';
import template from './ServerError';

interface IServerErrorProps {
  error?: Error
}

class ServerError extends Component<IServerErrorProps> {
  constructor(props: IServerErrorProps = {}) {
    const error = new Error({ codeError: '500', textError: 'Мы уже фиксим'});

    super({ error, ...props });
  }

  private templateNode(args: null | Record<string, string | string[]>) {
    return compileComponent(template, { ...args });
  }

  render() {
    return this.compile(this.templateNode, { error: this.props.error });
  }
}

export default ServerError;
