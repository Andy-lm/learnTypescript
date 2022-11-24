function echoWidthArr<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

const arrs = echoWidthArr([1, 2, 3]);

interface IWidthLength {
  length: number;
}

// 通过extends可以对泛型进行约束
function echoWidthLength<T extends IWidthLength>(args: T): T {
  console.log(args.length);
  return args;
}

const str = echoWidthLength("str");
const obj = echoWidthLength({ length: 10 });
const arr2 = echoWidthLength([12]);
