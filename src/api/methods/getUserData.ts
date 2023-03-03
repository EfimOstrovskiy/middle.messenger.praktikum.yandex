import { sendApiRequest } from '../apiService';

export function getUserData() {
  return sendApiRequest('/auth/user', 'GET');
}
