import HTTPTransport from '../utils/HTTPTransport';

enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

const DEFAULT_API_URL = 'https://ya-praktikum.tech/api/v2'
const DEFAULT_HEADER = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Credentials': 'true'
};

export function sendApiRequest(
  path: string,
  method: string,
  data?: Record<string, any>,
  header: Record<string, any> = DEFAULT_HEADER ) {
  const httpFetch = new HTTPTransport();

  switch (method) {
    case METHODS.GET:
      return httpFetch.get(`${DEFAULT_API_URL}${path}`, {
        headers:{
          ...header
        },
        data: data
      });
    case METHODS.POST:
      return httpFetch.post(`${DEFAULT_API_URL}${path}`, {
        headers:{
          ...header
        },
        data: JSON.stringify(data)
      });
    case METHODS.PUT:
      return httpFetch.put(`${DEFAULT_API_URL}${path}`, {
        headers:{
          ...header
        },
        data: JSON.stringify(data)
      });
    case METHODS.DELETE:
      return httpFetch.delete(`${DEFAULT_API_URL}${path}`, {
        headers:{
          ...header
        },
        data: JSON.stringify(data)
      });
  }
}
