declare function axios1(url: string): string;

// interface本质上是一个对象
interface Axios {
  get: (url: string) => string;
  post: (url: string, data: any) => string;
}

declare const axios2: Axios;

