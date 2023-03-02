import { sendApiRequest } from '../apiService';

function updateUserPassword(data: Record<string, any>) {
  return sendApiRequest('/user/password', 'PUT', data);
}

export default updateUserPassword;
