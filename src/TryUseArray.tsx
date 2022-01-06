import { triggerAsyncId } from "async_hooks";
import React from "react";
import { useMount, useArray } from "./utils";

export default function TryUseArray() {
  const persons: { name: string; age: number }[] = [
    { name: "hansum", age: 25 },
    { name: "jason", age: 22 },
  ];

  const { value, clear, removeIndex, add } = useArray(persons);
  useMount(() => {
    // console.log(value.notExist);
    // add({name:'david'})
    // removeIndex('123')
  });
  return (
    <div>
      <button onClick={() => add({ name: "john", age: 22 })}>Add john</button>
      <button onClick={() => removeIndex(0)}>remove 0</button>
      <button style={{ marginBottom: "50px" }} onClick={() => clear()}>
        clear
      </button>
      {value.map((person: { name: string; age: number }, index: number) => (
        <div style={{ marginBottom: "30px" }}>
          <span style={{ color: "red" }}>{index}</span>
          <span>{person.name}</span>
          <span>{person.age}</span>
        </div>
      ))}
    </div>
  );
}
