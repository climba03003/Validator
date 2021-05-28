export function isDate (value: unknown): value is Date {
  return value instanceof Date
}

export function isIdentical (value: unknown, compare: unknown): boolean {
  return isDate(value) && isDate(compare) && value.valueOf() === compare.valueOf()
}
