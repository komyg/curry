import { curry } from '../curry';
import { CurriedFn1, CurriedFn2, CurriedFn3 } from '../types';

describe('Curry', () => {
  it('should curry a function with one argument', () => {
    const testFn = (a: string) => a;
    const curried: CurriedFn1<string, string> = curry(testFn);
    expect(curried('1')).toBe('1');
  });

  it('should curry a function with two arguments', () => {
    const testFn = (a: string, b: string) => a + b;
    const curried: CurriedFn2<string, string, string> = curry(testFn);
    expect(curried('1', '2')).toBe('12');
    expect(curried('1')('2')).toBe('12');
  });

  it('should curry a function with three arguments', () => {
    const testFn = (a: string, b: string, c: string) => a + b + c;
    const curried: CurriedFn3<string, string, string, string> = curry(testFn);
    expect(curried('1', '2', '3')).toBe('123');
    expect(curried('1', '2')('3')).toBe('123');
    expect(curried('1')('2', '3')).toBe('123');
    expect(curried('1')('2')('3')).toBe('123');
  });

  it('should ignore extra arguments', () => {
    const testFn = (a: string, b: string) => a + b;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const curried: any = curry(testFn);
    expect(curried('1', '2', '3', '4')).toBe('12');
  });

  it('should ingnore empty calls', () => {
    const testFn = (a: string, b: string) => a + b;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const curried: any = curry(testFn);
    expect(curried('1')()('2')).toBe('12');
  });
});
