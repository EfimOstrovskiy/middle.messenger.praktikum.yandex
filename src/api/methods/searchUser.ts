import { sendApiRequest } from '../apiService';

export function searchUser(data: Record<string, string>) {
  return sendApiRequest('/user/search', 'POST', data);
}
