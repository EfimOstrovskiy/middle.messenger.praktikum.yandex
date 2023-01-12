import * as styles from './NotFound.module.scss';

import Error from '../../components/block/Error';

const template = `
  <div class="${styles.Root}">
    ${Error('404', 'Не туда попали')}
  </div>
`;

export default template;
