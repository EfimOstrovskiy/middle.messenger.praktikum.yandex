import styles from './ServerError.module.scss';

import Error from '../../components/block/Error';

const template = `
  <div class="${styles.Root}">
    ${Error('500', 'Мы уже фиксим')}
  </div>
`;

export default template;
