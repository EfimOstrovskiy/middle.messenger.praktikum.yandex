import { login } from '../../../api/methods/login';
import { getUserData } from '../../../api/methods/getUserData';
import { getChat } from '../../../api/methods/getChat';
import { Store } from '../Store';

export async function userLogin(data: Record<string, any>) {
  const store = new Store();

  const result: any = await login(data);
  const { status } = await result;

  if (status === 200) {
    const userData: any = await getUserData();
    const chats: any = await getChat({});

    store
      .set('auth', 'authorized')
      .set('user', JSON.parse(userData.response))
      .set('chats', JSON.parse(chats.response))
  }

  return status;
}
