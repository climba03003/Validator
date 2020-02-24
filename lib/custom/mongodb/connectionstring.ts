const regex = /^(mongodb|mongodb\+srv):\/\/(.+:.+@)?(.+)(\/.*)$/;

// should convert to string before process
export function isConnectionString(value: any): boolean {
  return regex.test(String(value));
}

export function isIdentical(value: any, compare: any): boolean {
  return isConnectionString(value) && isConnectionString(compare) && String(value) === String(compare);
}
