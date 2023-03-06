import { addChat } from '../../../api/methods/addChat';
import { searchUser } from '../../../api/methods/searchUser';
import { getChat } from '../../../api/methods/getChat';
import { addUserChat } from '../../../api/methods/addUserChat';
import { Store } from '../Store';

export async function createChat(data: Record<string, any>) {
  const store = new Store();
  const state = store.getState().user;
  const { login, title } = data;

  const user: any = await searchUser({ login });

  if (user.status === 200) {
    const userId = JSON.parse(user.response).map((obj: Record<string, any>) => obj.id);

    const createChat: any = await addChat({ title });
    const chatId = JSON.parse(createChat.response);

    if (createChat.status === 200) {
      await addUserChat({ users: [state.id, ...userId], chatId: chatId.id });
      const chats: any = await getChat({});

      store.set('chats', JSON.parse(chats.response));
    }

    return createChat.status
  }
}
