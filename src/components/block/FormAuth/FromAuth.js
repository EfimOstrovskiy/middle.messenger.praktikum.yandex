import * as styles from './FromAuth.module.scss';

const template = `
  <div class="${styles.Root}">
    <h3 class="${styles.Title}">{#title#}</h3>
    <form class="${styles.Form}">
      <div class="${styles.Fields}">
        {#fields#}
      </div>
      <div class="${styles.Control}">
        {#buttons#}
      </div> 
    </form>
  </div>
`;

export default template;
