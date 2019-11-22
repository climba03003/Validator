export function isNumber(value: any): value is number {
  return typeof value === 'number';
}

export function isNaN(value: any): boolean {
  return !isNumber(value);
}

export function isIdentical(value: any, compare: any): boolean {
  return isNumber(value) && isNumber(compare) && value === compare;
}

export function isRange(value: any, min: any, max: any): boolean {
  if (isNaN(value) || isNaN(min) || isNaN(max)) return false;
  return min <= value && value <= max;
}
