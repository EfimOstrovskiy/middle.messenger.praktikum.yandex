import { renderComponent } from '../';

export class Route {
  _pathname: any;
  _blockClass: any;
  _block: any;
  _props: any;

  constructor(pathname: any, view: any, props: any) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: any) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      const root = document.getElementById(this._props.rootQuery)
      root && root.replaceChildren()
    }
  }

  match(pathname: any) {
    return pathname === this._pathname;
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass();
      renderComponent(this._props.rootQuery, this._block.getContent());
      return;
    }
  }
}
