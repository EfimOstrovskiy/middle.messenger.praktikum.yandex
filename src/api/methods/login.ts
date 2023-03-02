import { sendApiRequest } from '../apiService';

function login(data: Record<string, any>) {
  return sendApiRequest('/auth/signin', 'POST', data);
}

export default login;
