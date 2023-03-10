import { REGEXP_SETTING,
  BASE_MESSAGE_ERROR,
  LOGIN_MESSAGE_ERROR,
  SIGN_IN_MESSAGE_ERROR
} from './const';

export type ValidationModeType = 'login' | 'signIn' | 'base';

export const Validation = (field: HTMLInputElement, mode: ValidationModeType) => {
  const nameField = field.name;
  const valueField = field.value;
  const regexp = new RegExp(REGEXP_SETTING[nameField]);

  const messageError = mode === 'login'
    ? LOGIN_MESSAGE_ERROR
    : mode === 'signIn'
      ? SIGN_IN_MESSAGE_ERROR
      : BASE_MESSAGE_ERROR;

  const verified = {
    success: true,
    messageError: ''
  };

  if (!regexp.test(valueField)) {
    verified.success = false;
    verified.messageError = messageError[nameField];
  }

  return verified;
};

export const ValidationResultView = (field: HTMLInputElement, result: { success: boolean, messageError: string }) => {
  const parentNode = field.parentElement;
  const formNode = field.closest('form');
  const messageNode = parentNode && parentNode.querySelector('span');
  if (messageNode && formNode) {
    if (!result.success) {
      messageNode.textContent = result.messageError;
      formNode.classList.add('validation-error');
      formNode.classList.remove('validation-success');
    } else {
      messageNode.textContent = '';
      formNode.classList.remove('validation-error');
      formNode.classList.add('validation-success');
    }
  }
};
