export const REGEXP_SETTING: Record<string, RegExp> = {
  first_name: /^[A-ZА-Я][a-zа-я]+$/,
  second_name: /^[A-ZА-Я][a-zа-я]+$/,
  login: /^[a-zA-Z][a-zA-Z0-9-_\.]{3,20}$/,
  email: /^\w+@\w+\.\w+$/,
  password: /^(?=.*[0-9])(?=.*[A-Za-z])[0-9a-zA-Z!_@#$%^&*]{8,40}$/,
  newPassword: /^(?=.*[0-9])(?=.*[A-Za-z])[0-9a-zA-Z!_@#$%^&*]{8,40}$/,
  phone: /^((\+7|7|8)+([0-9]){10,15})$/,
  message: /(.|\s)*\S(.|\s)*/
};

export const SIGN_IN_MESSAGE_ERROR: Record<string, string> = {
  first_name: 'Имя должно начинаться с заглавной буквы, не иметь цифр',
  second_name: 'Имя должно начинаться с заглавной буквы, не иметь цифр',
  login: 'Логин должен содержать от 3 до 20 символов',
  email: 'Введенная почта недопустима. Проверьте введенные данные',
  password: 'Пароль должен содержать спецсимволы, иметь одну заглавную букву и цифру. Длина от 8 до 40',
  phone: 'Введенный номер недопустим. Проверьте введенные данные',
};

export const LOGIN_MESSAGE_ERROR: Record<string, string> = {
  login: 'Некорректный логин. Проверьте введенные данные',
  password: 'Некоректный пароль. Проверьте введенные данные',
};

export const BASE_MESSAGE_ERROR: Record<string, string> = {
  first_name: 'Введенное имя недопустимо',
  second_name: 'Введенное имя недопустимо',
  login: 'Введенный лоин недопустим',
  email: 'Введенная почта недопустима',
  display_name: 'Введенный никнейм недопустим',
  newPassword: 'Введеный пароль недопустим',
  phone: 'Введенный номер недопустим',
};
