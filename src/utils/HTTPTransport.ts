enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

function getKey(key: string, parentKey?: string) {
  return parentKey ? `${parentKey}[${key}]` : key;
}

function getParams(data: Record<string, any> | [], parentKey?: string) {
  const result: [string, string][] = [];

  for(const [key, value] of Object.entries(data)) {
    if (typeof value === 'object' && value !== null) {
      result.push(...getParams(value, getKey(key, parentKey)));
    } else {
      result.push([getKey(key, parentKey), encodeURIComponent(String(value))]);
    }
  }

  return result;
}

function queryStringify(data: Record<string, any>) {
  return `?${getParams(data).map(arr => arr.join('=')).join('&')}`;
}

class HTTPTransport {
  get = (url: string, options: Record<string, any> = {}) => {
    return this.request(url, {...options, method: METHODS.GET}, options.timeout);
  };

  post = (url: string, options: Record<string, any> = {}) => {
    return this.request(url, {...options, method: METHODS.POST}, options.timeout);
  };

  put = (url: string, options: Record<string, any> = {}) => {
    return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
  };

  delete = (url: string, options: Record<string, any> = {}) => {
    return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
  };

  request = (url: string, options: Record<string, any> = {}, timeout = 5000) => {
    const {headers = {}, method, data} = options;

    return new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      xhr.open(
        method,
    isGet && !!data
          ? `${url}${queryStringify(data)}`
          : url,
      );
      xhr.withCredentials = true;

      Object.keys(headers).forEach(key => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = function() {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}

export default HTTPTransport;
