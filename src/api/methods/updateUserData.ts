import { sendApiRequest } from '../apiService';

function updateUserData(data: Record<string, any>) {
  return sendApiRequest('/user/profile', 'PUT', data);
}

export default updateUserData;
