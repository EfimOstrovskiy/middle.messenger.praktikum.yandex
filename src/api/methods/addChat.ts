import { sendApiRequest } from '../apiService';

export function addChat(data: Record<string, any>) {
  return sendApiRequest('/chats', 'POST', data);
}
