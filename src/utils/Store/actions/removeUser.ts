import { deleteUserChat } from '../../../api/methods/deleteUserChat';
import { Store } from '../Store';

export async function removeUser(login: string) {
  const store = new Store();
  const state = store.getState();

  const chat = state.activeChat;
  const user = chat.users?.find((user: Record<string, any>) => user.login === login);

  const result: any = await deleteUserChat({ users: [ user.id ], chatId: chat.chatId });

  if (result.status === 200) {
    const index = chat.users?.findIndex((user: Record<string, any>) => user.login === login);
    const newUser = chat.users;
    newUser?.splice(index, index);

    store.set('activeChat', {
      ...chat,
      users: [
        ...newUser
      ]
    });
  }
}
