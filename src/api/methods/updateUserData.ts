import { sendApiRequest } from '../apiService';

export function updateUserData(data: Record<string, string | number>) {
  return sendApiRequest('/user/profile', 'PUT', data);
}
