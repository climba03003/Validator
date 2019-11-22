import * as Validator from '../standard';

export function isArray(value: any): value is Array<any> {
  return value instanceof Array && Array.isArray(value);
}

export function isEmpty(value: any): boolean {
  return isArray(value) && value.length === 0;
}

export function isIdentical(value: any, compare: any): boolean {
  return isArray(value) && isArray(compare) && Validator.Object.isEqual(value, compare);
}
