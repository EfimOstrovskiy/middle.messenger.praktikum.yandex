import logout from '../../../api/methods/logout';
import { Store } from '../Store';

export async function userLogout() {
  const store = new Store();

  const result: any = await logout();
  const { status } = await result;

  if (status === 200) {
    store.removeState();
  }

  return status;
}
