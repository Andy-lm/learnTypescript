interface Persion {
  readonly id: number;
  name: string;
  age: number;
}

let andy: Persion = {
  id: 1,
  name: "andy",
  age: 18,
};

console.log(andy.id);
