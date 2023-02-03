import { compileComponent, Component } from '../../../utils';
import template from './FromAuth';
import Input from '../../core/Input';
import Button from '../../core/Button';

interface IFormAuthProps {
  title: string;
  fields: Input | Input[];
  buttons: Button | Button[]
}

class FormAuth extends Component<IFormAuthProps> {
  constructor(props: IFormAuthProps) {
    super(props);
  }

  private templateNode(args: null | Record<string, string | string[]>) {
    return compileComponent(template, { ...args });
  }

  render() {
    const { title, fields, buttons } = this.props
    return this.compile(this.templateNode, { title, fields, buttons });
  }
}

export default FormAuth;
