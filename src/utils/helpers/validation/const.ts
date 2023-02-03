export const REGEXP_SETTING: Record<string, RegExp> = {
  name: /^[A-ZА-Я][a-zа-я]+$/,
  login: /^[a-zA-Z][a-zA-Z0-9-_\.]{3,20}$/,
  email: /^\w+@\w+\.\w+$/,
  password: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
  phone: /^((\+7|7|8)+([0-9]){10,15})$/,
  // message: ''
};

export const SIGN_IN_MESSAGE_ERROR: Record<string, string> = {
  name: 'Имя должно начинаться с заглавной буквы, не иметь цифр',
  login: 'Логин должен содержать от 3 до 20 символов',
  email: 'Введенная почта недопустима. Проверьте введенные данные',
  password: 'Пароль должен содержать спецсимволы, иметь одну заглавную букву и цифру. Длина от 8 до 40',
  phone: 'Введенная почта недопустима. Проверьте введенные данные',
};

export const LOGIN_MESSAGE_ERROR: Record<string, string> = {
  login: 'Некорректный логин. Проверьте введенные данные',
  password: 'Некоректный пароль. Проверьте введенные данные',
};

export const BASE_MESSAGE_ERROR: Record<string, string> = {
  message: 'Поле не можеть быть пустым'
};
