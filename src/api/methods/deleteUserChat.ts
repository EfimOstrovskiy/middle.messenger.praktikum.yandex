import { sendApiRequest } from '../apiService';

export function deleteUserChat(data: Record<string, any>) {
  return sendApiRequest('/chats/users', 'DELETE', data);
}
