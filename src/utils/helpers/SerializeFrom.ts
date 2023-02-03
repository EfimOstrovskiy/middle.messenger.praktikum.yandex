export const SerializeForm = (form: HTMLFormElement, fieldsName: string[]) => {
  const data = new FormData(form);
  const result: any = {}

  fieldsName.forEach((name) => {
    result[name] = data.get(name)
  });

  return result;
};
