interface ILiteComponent {
  searchProps(arg: string): null | string[];
  compileComponent(template: string): (args: null | Record<string, string | string[]>) => string;
  renderComponent(root: string, node: DocumentFragment): void
}

type ArgsType = null | Record<string, string | string[]>;

class LiteComponent implements ILiteComponent {
  searchPropsReg: RegExp;
  clearPropsReg: RegExp;

  constructor() {
    this.searchPropsReg = new RegExp(/{#+[a-zA-Z]+#}/g);
    this.clearPropsReg = new RegExp(/[{#-#}]/g);
  }

  searchProps(template: string): null | string[] {
    const props = template.match(this.searchPropsReg)

    if (!props) {
      return null;
    }

    return props.map((prop) => {
      return prop.replace(this.clearPropsReg, '');
    });
  }

  compileComponent(template: string): (args: ArgsType) => string {
    return (args = null) => {
      let result = template;

      if (args === null) {
        return result;
      }

      for (let item of Object.keys(args)) {
        const value = args[item]
        if (value === null) {
          result = result.replace(`{#${item}#}`, '')
        } else {
          if (value instanceof Array) {
            result = result.replace(`{#${item}#}`, value.join(''))
          } else {
            result = result.replace(`{#${item}#}`, value)
          }
        }
      }

      return result;
    }
  }

  renderComponent(rootElement: string, node: DocumentFragment) {
    const root = document.getElementById(rootElement);
    root && root.replaceChildren(node);
  }
}

const compileComponent = (template: string, args: ArgsType) => new LiteComponent().compileComponent(template)(args);
const renderComponent = (rootElement: string, node: DocumentFragment) => new LiteComponent().renderComponent(rootElement, node);

export {
  compileComponent,
  renderComponent
};
