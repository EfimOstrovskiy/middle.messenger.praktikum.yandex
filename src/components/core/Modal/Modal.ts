import styles from './Modal.module.scss';

const template = `
  <div class="${styles.content}">
    {#close#}
    {#content#}
  </div>
`;

export default template;
