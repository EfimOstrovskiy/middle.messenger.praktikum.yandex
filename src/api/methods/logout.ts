import { sendApiRequest } from '../apiService';

export function logout() {
  return sendApiRequest('/auth/logout', 'POST');
}
