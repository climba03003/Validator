import * as Validator from '../standard';
import { CipherGCMTypes, CipherCCMTypes } from 'crypto';

export type CipherTypes = CipherGCMTypes | CipherCCMTypes;

export function isCipherGCMTypes(value: any): value is CipherGCMTypes {
  return Validator.String.isString(value) && ['aes-128-gcm', 'aes-192-gcm', 'aes-256-gcm'].includes(value);
}

export function isCipherCCMTypes(value: any): value is CipherCCMTypes {
  return Validator.String.isString(value) && ['aes-128-ccm', 'aes-192-ccm', 'aes-256-ccm'].includes(value);
}
export function isCipherTypes(value: any): value is CipherTypes {
  return isCipherCCMTypes(value) || isCipherGCMTypes(value);
}
