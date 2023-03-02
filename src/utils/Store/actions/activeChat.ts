import { Store } from '../Store';
import getToken from '../../../api/methods/getToken';

export async function activeChat(title: string) {
  const store = new Store();
  const chats = store.getState().chats;

  const activeChat = chats.find((chat: Record<string, any>) => chat.title === title);

  const token: any = await getToken(activeChat.id);
  const { status, response } = await token;

  if (status === 200) {
    store.set('activeChat', {
      chatId: activeChat.id,
      title: activeChat.title,
      token: JSON.parse(response).token
    })
  }
}
