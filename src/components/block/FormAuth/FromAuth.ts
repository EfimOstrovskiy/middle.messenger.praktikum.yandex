import * as styles from './FromAuth.module.scss';

const template = `
  <h3 class="${styles.title}">{#title#}</h3>
  <form class="${styles.form}">
    <div class="${styles.fields}">
      {#fields#}
    </div>
    <div class="${styles.control}">
      {#buttons#}
    </div>
  </form>
`;

export default template;
