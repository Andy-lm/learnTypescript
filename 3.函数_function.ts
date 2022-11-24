type Add = (a: number, b: number, c: number) => number;

const add: Add = (a, b, c) => {
  if (typeof c === "number") {
    return a + b + c;
  } else {
    return a + b;
  }
};

const sub = function (a: number, b: number, c: number = 5): number {
  if (typeof c === "number") {
    return a - b - c;
  } else {
    return a - b;
  }
};

const sub2: (a: number, b: number, c?: number) => number = sub;
