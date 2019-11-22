import * as Validator from '../standard';

export function isJSON(value: any): value is any {
  try {
    const result = JSON.parse(JSON.stringify(value));
    // array can be parsed by json but it is not a json
    if (Array.isArray(result)) return false;
    return true;
  } catch (err) {
    return false;
  }
}

export function isEmpty(value: any): boolean {
  // undefined and null is empty JSON
  if (Validator.Undefined.isUndefined(value) || Validator.Null.isNull(value)) return true;
  return isJSON(value) && JSON.stringify(value) === JSON.stringify({});
}

export function isIdentical(value: any, compare: any): boolean {
  return Validator.Object.isEqual(value, compare);
}
