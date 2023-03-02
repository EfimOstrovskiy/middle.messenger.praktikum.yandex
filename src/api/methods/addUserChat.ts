import { sendApiRequest } from '../apiService';

function addUserChat(data: Record<string, any>) {
  return sendApiRequest('/chats/users', 'PUT', data);
}

export default addUserChat;
