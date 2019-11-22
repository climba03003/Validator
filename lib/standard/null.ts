export function isNull(value: any): value is null {
  return value === null;
}

export function isIdentical(value: any, compare: any): boolean {
  return isNull(value) && isNull(compare) && value === compare;
}
