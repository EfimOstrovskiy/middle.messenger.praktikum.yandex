import HTTPTransport from './HTTPTransport';

describe('HTTPTransport', () => {
  const apiUrl = 'http://localhost:3000';

  const httpFetch = new HTTPTransport();

  const open = jest.fn();
  const send = jest.fn();
  const setRequestHeader = jest.fn();

  window.XMLHttpRequest = jest.fn().mockImplementation(() => ({open, send, setRequestHeader})) as any;

  test('GET', () => {
    httpFetch.get(`${apiUrl}/user`);

    expect(open).toBeCalledWith('GET', `${apiUrl}/user`);
  });

  test('POST', () => {
    const data = { login: 'Master', name: 'Bruce' };
    httpFetch.post(`${apiUrl}/user`, { data: JSON.stringify(data) });

    expect(open).toBeCalledWith('POST', `${apiUrl}/user`);

    expect(send).toBeCalledWith(JSON.stringify(data));
  });
});
