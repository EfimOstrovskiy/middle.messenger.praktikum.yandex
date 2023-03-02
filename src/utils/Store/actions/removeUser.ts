import deleteUserChat from "../../../api/methods/deleteUserChat";
import searchUser from '../../../api/methods/searchUser';


export async function removeUser(login: string, chatId: string | number) {
  const user: any = await searchUser({ login });

  if (user.status === 200) {
    const userId = JSON.parse(user.response).map((obj: Record<string, any>) => obj.id);

    await deleteUserChat({ users: [...userId], chatId: chatId });
  }
}
