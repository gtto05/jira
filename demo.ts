// TODO: 基本类型 : number,string,null,undefined,boolean

let str: string = "hansum";
let num = 999;
console.log(str, num);

// TODO: 数组

let arr1: string[] = ["a"];
let arr2: string[][] = [["aa"], ["bb"]];
let tuple1: [number, boolean] = [123, true];
let tuple2: [number, boolean][] = [
  [123, true],
  [456, false],
];
console.log(arr1, arr2, tuple1, tuple2);

// TODO: 枚举
enum liveStatus {
  SUCCESS = 0,
  FAILD = -1,
  WORKING = 1,
}
const res = liveStatus.SUCCESS;
console.log(res);

// TODO: union

type A = number | string;
let aa: A;
aa = 456;
console.log(aa);

// TODO: type VS interface

interface user {
  name: string;
  age: number;
}
const myInfo: user = {
  name: "hansum",
  age: 18,
};
console.log(myInfo);

// TODO: function

function hello(a: string, b?: string): string {
  return a + b;
}
console.log(hello("hello", "world"));

// TODO: 断言 unknown 有些类型是无法推导出来的
interface Data {
  name: string;
  id: string;
  title: string;
}

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = (await res.json()) as Data;
  console.log(data);
};
const data1: Data = {
  name: "hansum",
  id: "001",
  title: "hansum@gmail.com",
};
type Beta = {
  name: string;
};
// 假设data1是动态的
const beta = data1 as unknown as Beta;

// TODO: class  private public protected

class Live {
  roomName: string;
  private id: string;
  protected name: string;

  constructor(roomName1: string, id1: string, name1: string) {
    this.roomName = roomName1;
    this.id = id1;
    this.name = name1;
  }
}

const live = new Live("1号", "00001", "hansum");
console.log(live.id);

class CarLive extends Live {
  constructor(roomName1: string, id1: string, name1: string) {
    super(roomName1, id1, name1);
  }
  start() {}
}
const carLive = new CarLive("2号", "00002", "bwn");
console.log(carLive);

// TODO: 泛型
function print<T>(data: T) {
  console.log(data);
}

print<number>(123);
print<string>(123);
print(123);

class Print<T> {
  data: T;
  constructor(d: T) {
    this.data = d;
  }
}
const p = new Print<number>(123);
const p1 = new Print<string>("hansum");
