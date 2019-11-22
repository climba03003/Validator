export function isBigInt(value: any): value is BigInt {
  return typeof value === 'bigint';
}

export function isIdentical(value: any, compare: any): boolean {
  return isBigInt(value) && isBigInt(compare) && value === compare;
}
