import { sendApiRequest } from '../apiService';

export function getToken(chatId: string | number) {
  return sendApiRequest(`/chats/token/${chatId}`, 'POST');
}
