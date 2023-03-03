import { sendApiRequest } from '../apiService';

export function updateUserPassword(data: Record<string, string | number>) {
  return sendApiRequest('/user/password', 'PUT', data);
}
