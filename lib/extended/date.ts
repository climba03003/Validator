import * as Validator from '../standard';

export function isDate(value: any): value is Date {
  return value instanceof Date && Validator.Number.isNumber(value.valueOf());
}

export function isDateString(value: any): boolean {
  // isNaN will be checked, because nodeJS date will parse all integer be the year value
  return isNaN(value) && Validator.String.isString(value) && new Date(value).toString() !== 'Invalid Date';
}

export function isDateNumber(value: any): boolean {
  return Validator.Number.isNumber(value) && new Date(value).toString() !== 'Invalid Date';
}

export function maybeDate(value: any): boolean {
  return isDateString(value) || isDateNumber(value);
}

export function isIdentical(value: any, compare: any): boolean {
  return isDate(value) && isDate(compare) && value.valueOf() === compare.valueOf();
}
