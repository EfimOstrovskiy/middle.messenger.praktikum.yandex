import { addUserChat } from '../../../api/methods/addUserChat';
import { searchUser } from '../../../api/methods/searchUser';
import { Store } from '../Store';

export async function addUser(login: string) {
  const store = new Store();
  const state = store.getState();

  const chat = state.activeChat;
  const user: any = await searchUser({ login });

  if (user.status === 200) {
    const userId = JSON.parse(user.response).map((obj: Record<string, any>) => obj.id);

    const result: any = await addUserChat({ users: [...userId], chatId: chat.chatId });

    if (result.status === 200) {
      store.set('activeChat', {
        ...chat,
        users: [
          ...chat.users,
          ...JSON.parse(user.response)
        ]
      });
    }
  }
}
