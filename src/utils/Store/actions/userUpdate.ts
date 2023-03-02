import updateUserData from '../../../api/methods/updateUserData';
import { Store } from '../Store';

export async function userUpdate(data: Record<string, any>) {
  const store = new Store();

  const result: any = await updateUserData(data);
  const { status, response } = await result;

  if (status === 200) {
    store.set('user', JSON.parse(response))
  }
}
