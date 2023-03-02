import { sendApiRequest } from '../apiService';

function signIn(data: Record<string, any>) {
  return sendApiRequest('/auth/signup', 'POST', data);
}

export default signIn;
