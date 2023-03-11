import { renderComponent, Component } from '../';

export class Route {
  pathname: string;
  blockClass: any;
  block: Component | null;
  props: Record<string, any>;
  tag?: string

  constructor(pathname: string, view: string, props: Record<string, any>, tag?: string) {
    this.pathname = pathname;
    this.blockClass = view;
    this.block = null;
    this.props = props;
    this.tag = tag;
  }

  navigate(pathname: string) {
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

  match(pathname: string) {
    return pathname === this.pathname;
  }

  render() {
    if (!this.block) {
      this.block = new this.blockClass(this.tag);

      renderComponent(this.props.rootQuery, this.block?.getContent());

      return;
    }
  }
}
