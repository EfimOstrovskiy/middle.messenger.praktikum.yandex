import { sendApiRequest } from '../apiService';

function getUserData() {
  return sendApiRequest('/auth/user', 'GET');
}

export default getUserData;
