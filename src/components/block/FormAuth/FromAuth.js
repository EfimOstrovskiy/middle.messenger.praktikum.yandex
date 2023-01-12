import styles from './FromAuth.module.scss';

const template = `
  <div class="${styles.Root}">
    <h3 class="${styles.Title}">{#title#}</h3>
    <form class="${styles.Form}">{#fields#}</form>
    <div class="${styles.Control}">
      {#buttons#}
    </div> 
  </div>
`;

export default template;
