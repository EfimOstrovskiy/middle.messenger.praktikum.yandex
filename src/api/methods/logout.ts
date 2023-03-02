import { sendApiRequest } from '../apiService';

function logout() {
  return sendApiRequest('/auth/logout', 'POST');
}

export default logout;
