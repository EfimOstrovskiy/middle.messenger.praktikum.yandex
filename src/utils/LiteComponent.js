export class LiteComponent {
  constructor() {
    this.searchPropsReg = new RegExp(/{#+[a-zA-Z]+#}/g);
    this.clearPropsReg = new RegExp(/[{#-#}]/g);
  }

  searchProps(template) {
    const  props = template.match(this.searchPropsReg)

    if (!props) {
      return null;
    }

    return props.map((prop) => {
      return prop.replace(this.clearPropsReg, '');
    });
  }

  isEqualProps(props, args) {
    if (props.length !== args.length) {
      return false
    }

    for (let i = 0; i < props.length; i++) {
      if (props[i] !== args[i]) return false;
    }

    return true;
  }

  compileComponent(template) {
    const props = this.searchProps(template);
    const objProps = props && props.reduce((arr, prop) => ({ ...arr, [prop]: null}), {});

    return (args = null) => {
      let result = template;

      if (args === null) {
        return result;
      }

      if (!this.isEqualProps(Object.keys(objProps), Object.keys(args))) {
        throw new Error('Используются недопустимые параметры!')
      }

      for (let item of Object.keys(args)) {
        if (args[item] === null) {
          result = result.replace(`{#${item}#}`, '')
        } else {
          if (args[item] instanceof Array) {
            result = result.replace(`{#${item}#}`, args[item].join(''))
          } else {
            result = result.replace(`{#${item}#}`, args[item])
          }
        }
      }

      return result;
    }
  }

  renderComponent(rootElement, node) {
    const templateElement = document.createElement('template');
    const root = document.getElementById(rootElement);

    templateElement.innerHTML = node;
    root.appendChild(templateElement.content);
  }
}
