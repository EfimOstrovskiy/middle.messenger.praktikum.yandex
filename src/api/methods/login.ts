import { sendApiRequest } from '../apiService';

export function login(data: Record<string, string | number>) {
  return sendApiRequest('/auth/signin', 'POST', data);
}
