import { Validation, ValidationModeType, ValidationResultView } from './Validation';
import { SerializeForm } from '../SerializeFrom';

export const handleFocus = (field: HTMLInputElement, mode: ValidationModeType) => {
  const result = Validation(field, mode);
  ValidationResultView(field, result);
};

export const handleBlur = (field: HTMLInputElement, mode: ValidationModeType) => {
  const result = Validation(field, mode);
  ValidationResultView(field, result);
};

export const handleSubmit = (field: HTMLElement, mode: ValidationModeType) => {
  let invalid;
  const form = field.closest('form');
  if (form) {
    const fields = Array.from(form.querySelectorAll('input'));
    const fieldsName = fields.map(field => field.name);

    fields.forEach(field => {
      const result = Validation(field, mode);
      if (!result.success) {
        invalid = true;
        ValidationResultView(field, result);
      }
    });

    if (!invalid) {
      console.log(SerializeForm(form, fieldsName))
    }
  }
};
