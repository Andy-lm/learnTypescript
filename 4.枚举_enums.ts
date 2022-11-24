// enum Direction {
// 我们可以改变枚举的默认索引
//     Left = 10,
//     Right,
//     Up,
//     Down
// }

// console.log(Direction[1]);

// 设置枚举值为常量在编译后会直接以常量的形式进行编译，提升性能
const enum Direction {
    Left = "LEFT",
    Right = "RIGHT",
    Up = "UP",
    Down = "DOWN"
}

// 注意：枚举值可以分为常量值和计算值，只有常量值才可以进行常量枚举

console.log(Direction.Up);

console.log(Direction.Right);


