import HTTPTransport from '../utils/HTTPTransport';

const defaultApiUrl = 'https://ya-praktikum.tech/api/v2'
const defaultHeader = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Credentials': 'true'
};

export function sendApiRequest(path: string, method: string, data?: Record<string, any>) {
  const httpFetch = new HTTPTransport();

  switch (method) {
    case 'GET':
      return httpFetch.get(`${defaultApiUrl}${path}`, {
        headers:{
          ...defaultHeader
        },
        data: data
      });
    case 'POST':
      return httpFetch.post(`${defaultApiUrl}${path}`, {
        headers:{
          ...defaultHeader
        },
        data: JSON.stringify(data)
      });
    case 'PUT':
      return httpFetch.put(`${defaultApiUrl}${path}`, {
        headers:{
          ...defaultHeader
        },
        data: JSON.stringify(data)
      });
    case 'DELETE':
      return httpFetch.delete(`${defaultApiUrl}${path}`, {
        headers:{
          ...defaultHeader
        },
        data: JSON.stringify(data)
      });
  }
}
