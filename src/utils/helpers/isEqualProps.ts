export function isEqualProps(oldProps: Record<string, any>, newProps: Record<string, any>): boolean {
  const  oldKeys = Object.keys(oldProps);
  const  newKeys = Object.keys(newProps);

  if (oldKeys.length !== newKeys.length) {
    return false
  }

  const isObject = (arg: any) => {
    return typeof arg === 'object' && arg !== null;
  }

  for (let i = 0; i < oldKeys.length; i++) {
    const oldValue = oldProps[oldKeys[i]];
    const newValue = newProps[newKeys[i]];

    if (isObject(oldValue) && isObject(newValue)) {
      return isEqualProps(oldValue, newValue);
    }

    if (oldValue !== newValue) return false;
  }

  return true;
}
