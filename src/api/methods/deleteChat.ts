import { sendApiRequest } from '../apiService';

export function deleteChat(data: Record<string, any>) {
  return sendApiRequest('/chats', 'DELETE', data);
}
