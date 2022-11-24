/**
 * 泛型主要有以下使用场景：
 * 1.函数类型的申明
 * 2.类的声明
 * 3.接口也就是interface的声明
 * 
 * 其次可以通过extends对泛型进行约束
 */




// 在类中可以这样使用泛型
class Queue<T> {
  private data: T[] = [];
  push(item: T) {
    this.data.push(item);
  }
  pop(): T | undefined {
    return this.data.shift();
  }
}

const queue = new Queue<number>();

queue.push(2);
queue.pop()?.toString();

const queue2 = new Queue<string>();
queue2.push("str");
queue2.pop()?.split("");

// 泛型也可以对接口进行约束
interface KeyPair<T, U> {
  key: T;
  value: U;
}

const keyPair: KeyPair<string, number> = {
  key: "name",
  value: 1,
};

// 泛型约束方法
interface IPlus<T> {
  (a: T, b: T): T;
}

function sum(a: number, b: number): number {
  return a + b;
}

function connect(a: string, b: string): string {
  return a + b;
}

const a1: IPlus<number> = sum;
const b1: IPlus<string> = connect;
