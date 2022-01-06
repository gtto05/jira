let str = "hansum";
let num = 999;
let n = null;
let un = undefined;

let arr: string[] = ["string"];

// ----------enum 枚举---------
enum liveStatus {
  SUCCESS = 0,
  FAILD = -1,
  WORKING = 1,
}
const sts = liveStatus.SUCCESS;
console.log(sts);

// ---------union ------------

type A = number | string;
let aa: A;
aa = 456;

// ------------interface -----

interface user {
  name: string;
  age: number;
}
const myInfo: user = {
  name: "hansum",
  age: 18,
};

// --------function -----------

function hello(a: string, b: string) {
  return a + b;
}

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data);
};
