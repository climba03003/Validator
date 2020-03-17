import { ObjectId } from 'mongodb';

const regex = /^[a-f\d]{24}$/i;

// should convert to string before process
export function isObjectId(value: any): value is ObjectId {
  return regex.test(String(value));
}

export function isIdentical(value: any, compare: any): boolean {
  // use === because objectid must be a 12 byte hex string
  return isObjectId(value) && isObjectId(compare) && String(value) === String(compare);
}
