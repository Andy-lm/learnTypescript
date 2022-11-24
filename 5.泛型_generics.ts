function echo<T>(args: T): T {
  return args;
}

const string = "123";
const res = echo(string);


function swap<T,U>(tuple:[T,U]):[U,T]{
    return [tuple[1],tuple[0]]
}

let res2 = swap(["str",1])