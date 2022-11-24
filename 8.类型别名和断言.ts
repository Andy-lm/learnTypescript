type NameResolver = () => string;
type NameOrResolver = NameResolver | string;

function getName(n: NameResolver) {
  if (typeof n === "string") {
    return n;
  } else {
    return n();
  }
}

// 类型断言
function getLength(input: string | number) {
  const str = input as String;
  if (str.length) {
    return str.length;
  } else {
    return str.toString().length;
  }
    // 可以简写
    // if((<string>input).length) {
    //     return (<string>input).length
    // }else {
    //     return input.toString().length
    // }
}
