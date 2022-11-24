interface IPersion {
  name: string;
  age: number;
}


// 这里主要说两个ts提供的工具类型Partial和Omit，其接收一个泛型，可以控制接口的参数
const xm: IPersion = { name: "小明", age: 18 };
const xl: Omit<IPersion, "name"> = { age: 18 };
const lw: Partial<IPersion> = { name: "lw" };

// 这里总结一下，个人认为interface和type最大的区别是可以进行操作
// 1.interface定义的类型时可以接收一个泛型
// 2.interface定义的类型可以使用extends进行扩展
// 3.interface定义的类型可以使用如：Omit、Partial这样的工具类型
