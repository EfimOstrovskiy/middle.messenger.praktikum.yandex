import { EventBus } from '../EventBus';

export class Store extends EventBus {
  static EVENT_UPDATE = 'update';
  static instance: any;
  static STORE_NAME = 'store';

  state: Record<string, any> = { };

  constructor() {

    if(Store.instance)
      return Store.instance;

    const savedState = localStorage.getItem(Store.STORE_NAME);

    super();

    Store.instance = this;

    this.state = savedState ? (JSON.parse(savedState) ?? {}) : {}
    this.on(Store.EVENT_UPDATE, () => {
      localStorage.setItem(Store.STORE_NAME, JSON.stringify(this.state));
    });
  }

  getState() {
    return this.state;
  }

  removeState() {
    this.state = {};
    this.emit(Store.EVENT_UPDATE);
  }

  set(id: any, value: any) {
    this.state[id] = value;
    this.emit(Store.EVENT_UPDATE);
    return this;
  }
}
