export function isString(value: any): value is string {
  return typeof value === 'string';
}

export function isEmpty(value: any): boolean {
  return isString(value) && String(value).trim() === String('');
}

export function isIdentical(value: any, compare: any): boolean {
  return isString(value) && isString(compare) && value === compare;
}
