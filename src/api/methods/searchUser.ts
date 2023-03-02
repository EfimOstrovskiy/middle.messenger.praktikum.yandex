import { sendApiRequest } from '../apiService';

function searchUser(data: Record<string, any>) {
  return sendApiRequest('/user/search', 'POST', data);
}

export default searchUser;
