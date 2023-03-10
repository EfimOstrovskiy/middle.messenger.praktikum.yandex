const formatterValue = (value: any) => {
  const lt = /</g;
  const gt = />/g;
  const ap = /'/g;
  const ic = /"/g;

  return value.toString()
    .replace(lt, "&lt;")
    .replace(gt, "&gt;")
    .replace(ap, "&#39;")
    .replace(ic, "&#34;");
};

export const SerializeForm = (form: HTMLFormElement, fieldsName: string | string[]) => {
  const data = new FormData(form);
  const result: Record<string, any> = {};

  if (Array.isArray(fieldsName)) {
    fieldsName.forEach((name) => {
      result[name] = data.get(name) ? formatterValue(data.get(name)) : null;
    });
  } else {
    result[fieldsName] = data.get(fieldsName) ? formatterValue(data.get(fieldsName)) : null;
  }

  return result;
};
