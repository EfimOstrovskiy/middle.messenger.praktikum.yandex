import { sendApiRequest } from '../apiService';

function deleteChat(data: Record<string, any>) {
  return sendApiRequest('/chats', 'DELETE', data);
}

export default deleteChat;
