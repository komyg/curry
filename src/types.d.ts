export type CurriedFn1<A, R> = {
  (a: A): R;
};

export type CurriedFn2<A, B, R> = {
  (a: A): CurriedFn1<B, R>;
  (a: A, b: B): R;
};

export type CurriedFn3<A, B, C, R> = {
  (a: A): CurriedFn2<B, C, R>;
  (a: A, b: B): CurriedFn1<C, R>;
  (a: A, b: B, c: C): R;
};

export type CurriedFn4<A, B, C, D, R> = {
  (a: A): CurriedFn3<B, C, D, R>;
  (a: A, b: B): CurriedFn2<C, D, R>;
  (a: A, b: B, c: C): CurriedFn1<D, R>;
  (a: A, b: B, c: C, d: D): R;
};
