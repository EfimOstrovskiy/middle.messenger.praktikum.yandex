import { sendApiRequest } from '../apiService';

function deleteUserChat(data: Record<string, any>) {
  return sendApiRequest('/chats/users', 'DELETE', data);
}

export default deleteUserChat;
