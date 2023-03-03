import { sendApiRequest } from '../apiService';

export function addUserChat(data: Record<string, any>) {
  return sendApiRequest('/chats/users', 'PUT', data);
}
