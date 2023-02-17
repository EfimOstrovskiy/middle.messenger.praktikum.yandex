import * as styles from './FromAuth.module.scss';

const template = `
  <h3 class="${styles.Title}">{#title#}</h3>
  <form class="${styles.Form}">
    <div class="${styles.Fields}">
      {#fields#}
    </div>
    <div class="${styles.Control}">
      {#buttons#}
    </div>
  </form>
`;

export default template;
