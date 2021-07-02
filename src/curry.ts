/* eslint-disable @typescript-eslint/no-explicit-any */
export function curry(fn: (...args: any[]) => any, ...args: any[]): any {
  if (args.length >= fn.length) {
    return fn(...args);
  }

  return (...partialArgs: any[]) => curry(fn, ...args, ...partialArgs);
}
