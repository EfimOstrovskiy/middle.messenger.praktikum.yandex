export const SerializeForm = (form: any, fieldsName: string | string[]) => {
  const data = new FormData(form);
  const result: any = {}

  if (Array.isArray(fieldsName)) {
    fieldsName.forEach((name) => {
      result[name] = data.get(name)
    });
  } else {
    result[fieldsName] = data.get(fieldsName)
  }

  return result;
};
