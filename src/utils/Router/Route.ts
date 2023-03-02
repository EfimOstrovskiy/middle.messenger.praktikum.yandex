import { renderComponent } from '../';

export class Route {
  pathname: any;
  blockClass: any;
  block: any;
  props: Record<string, any>;
  tag: string

  constructor(pathname: any, view: string, props: Record<string, any>, tag: string) {
    this.pathname = pathname;
    this.blockClass = view;
    this.block = null;
    this.props = props;
    this.tag = tag;
  }

  navigate(pathname: any) {
    if (this.match(pathname)) {
      this.pathname = pathname;

      this.render();
    }
  }

  leave() {
    if (this.block) {
      this.block = null;
    }
  }

  match(pathname: any) {
    return pathname === this.pathname;
  }

  render() {
    if (!this.block) {
      this.block = new this.blockClass(this.tag);

      renderComponent(this.props.rootQuery, this.block.getContent());

      return;
    }
  }
}
