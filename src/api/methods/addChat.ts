import { sendApiRequest } from '../apiService';

function addChat(data: Record<string, any>) {
  return sendApiRequest('/chats', 'POST', data);
}

export default addChat;
