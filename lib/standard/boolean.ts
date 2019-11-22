// determine if the value is boolean
export function isBoolean(value: any): value is boolean {
  return typeof value === 'boolean';
}

// determine if the value is strictly true
export function isTrue(value: any): value is true {
  return isBoolean(value) && value === true;
}

// determine if the value can represent true
export function maybeTrue(value: any): boolean {
  if (typeof value === 'number') return value === 1;
  if (typeof value === 'string') return value.toLocaleLowerCase() === 'true';
  if (typeof value === 'boolean') return isTrue(value);
  return false;
}

// determine if the value is strictly false
export function isFalse(value: any): value is false {
  return isBoolean(value) && value === false;
}

// determine if the value can represent false
export function maybeFalse(value: any): boolean {
  if (typeof value === 'number') return value === 0;
  if (typeof value === 'string') return value.toLocaleLowerCase() === 'false';
  if (typeof value === 'boolean') return isFalse(value);
  return false;
}

// determine if the two value are identical boolean
export function isIdentical(value: any, compare: any): boolean {
  return isBoolean(value) && isBoolean(compare) && value === compare;
}
