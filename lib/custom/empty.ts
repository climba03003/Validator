import * as ExtendedValidator from '../extended';
import * as StandardValidator from '../standard';

type Empty = undefined | null | '' | {} | [];

export function isEmpty(value: any): value is Empty {
  return (
    StandardValidator.Undefined.isUndefined(value) ||
    StandardValidator.Null.isNull(value) ||
    StandardValidator.String.isEmpty(value) ||
    ExtendedValidator.JSON.isEmpty(value) ||
    ExtendedValidator.Array.isEmpty(value)
  );
}

export function isExist<T>(value: T): value is NonNullable<T> {
  return !isEmpty(value);
}
