export function isUndefined(value: any): value is undefined {
  return typeof value === 'undefined';
}

export function isIdentical(value: any, compare: any): boolean {
  return isUndefined(value) && isUndefined(compare) && value === compare;
}
