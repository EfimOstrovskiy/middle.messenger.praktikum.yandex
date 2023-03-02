import { sendApiRequest } from '../apiService';

function getChat(data: Record<string, any>) {
  return sendApiRequest('/chats', 'GET', data);
}

export default getChat;
