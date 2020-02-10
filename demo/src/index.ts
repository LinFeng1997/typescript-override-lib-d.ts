import Lib from './lib/a';
export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

export const sum3 = (lib: Lib) => {
  return lib.sum2(1, 2, 3);
};
