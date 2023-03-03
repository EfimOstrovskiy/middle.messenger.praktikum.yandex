import { sendApiRequest } from '../apiService';

export function getChat(data: Record<string, any>) {
  return sendApiRequest('/chats', 'GET', data);
}
