import { sendApiRequest } from '../apiService';

export function getChatUsers(chatId: string | number) {
  return sendApiRequest(`/chats/${chatId}/users`, 'GET', {});
}
