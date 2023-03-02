import { sendApiRequest } from '../apiService';

function getToken(chatId: string | number) {
  return sendApiRequest(`/chats/token/${chatId}`, 'POST');
}

export default getToken;
