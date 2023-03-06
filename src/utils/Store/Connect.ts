import { Store } from './Store';

export function connect(Component: any, mapStateToProps: any) {
  return class extends Component {
    constructor(tag: string, props = {}) {
      const store = new Store();

      let state = mapStateToProps(store.getState());

      super(tag, {...props, ...state});

      store.on(Store.EVENT_UPDATE, () => {
        const newState = mapStateToProps(store.getState());

        this.setProps({...newState});

        state = newState;
      });
    }
  };
}
