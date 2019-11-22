export function isSymbol(value: any): value is symbol {
  return typeof value === 'symbol';
}

export function isIdentical(value: any, compare: any): boolean {
  return isSymbol(value) && isSymbol(compare) && value === compare;
}
