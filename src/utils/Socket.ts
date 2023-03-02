import { Store } from './Store';

export function Socket(chatId: string | number, token: string) {
  const store = new Store();
  const state = store.getState();

  if (!chatId && !token) {
    return;
  }

  const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${state.user.id}/${chatId}/${token}`);

  socket.addEventListener('open', () => {
    console.log('Соединение установлено');

    setInterval(() => {
      socket.send(JSON.stringify({
        type: 'ping',
      }));
    }, 10000);

    socket.send(JSON.stringify({
      content: '0',
      type: 'get old',
    }));
  });

  socket.addEventListener('close', event => {
    if (event.wasClean) {
      console.log('Соединение закрыто чисто');
    } else {
      console.log('Обрыв соединения');
    }

    console.log(`Код: ${event.code} | Причина: ${event.reason}`);
  });

  socket.addEventListener('message', event => {
    const data = JSON.parse(event.data);

    if (data.type === 'message') {
      store.set('message', data);
    }

    if (Array.isArray(data)) {
      store.set('message', data)
    }
  });

  socket.addEventListener('error', () => {
    console.log('Ошибка');
  });

  return socket;
}
