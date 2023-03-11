import { Component } from './Component';

interface ITestComponentProps {
  title: string
}

class TestComponent extends Component<ITestComponentProps> {
  constructor(props: ITestComponentProps) {
    super('div', { ...props });
  }

  render(): DocumentFragment {
    return this.compile(() => 'Test', {});
  }
}
const component = new TestComponent({
  title: 'Testing start...'
});

describe('Component', () => {
  test('Create component', () => {
    expect(component.getContent().innerHTML).toBeTruthy();
  });

  test('Change props component', () => {
    component.setProps({
      title: 'Test success!'
    });

    expect(component.props.title).toBe('Test success!');
  });
});
