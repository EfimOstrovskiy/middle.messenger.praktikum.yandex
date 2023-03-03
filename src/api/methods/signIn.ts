import { sendApiRequest } from '../apiService';

export function signIn(data: Record<string, string | number>) {
  return sendApiRequest('/auth/signup', 'POST', data);
}
