import * as StandardValidator from '../standard';
import * as ExtendedValidator from '../extended';

export function isEmpty(value: any): boolean {
  return (
    StandardValidator.Undefined.isUndefined(value) ||
    StandardValidator.Null.isNull(value) ||
    StandardValidator.String.isEmpty(value) ||
    ExtendedValidator.JSON.isEmpty(value) ||
    ExtendedValidator.Array.isEmpty(value)
  );
}
