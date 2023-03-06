import { Store } from '../Store';
import { getToken } from '../../../api/methods/getToken';
import { getChatUsers } from '../../../api/methods/getChatUsers';

export async function activeChat(title: string) {
  const store = new Store();
  const chats = store.getState().chats;

  const activeChat = chats.find((chat: Record<string, any>) => chat.title === title);

  const token: any = await getToken(activeChat.id);
  const { status } = await token;

  if (status === 200) {
    const users: any = await getChatUsers(activeChat.id);

    store.set('activeChat', {
      chatId: activeChat.id,
      title: activeChat.title,
      users: JSON.parse(users.response),
      token: JSON.parse(token.response).token
    });
  }
}
