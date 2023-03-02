import addUserChat from '../../../api/methods/addUserChat';
import searchUser from '../../../api/methods/searchUser';


export async function addUser(login: string, chatId: string | number) {
  const user: any = await searchUser({ login });

  if (user.status === 200) {
    const userId = JSON.parse(user.response).map((obj: Record<string, any>) => obj.id);

    await addUserChat({ users: [...userId], chatId: chatId });
  }
}
