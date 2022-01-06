import React, { useEffect, useState } from "react";
import { cleanObject, useDebounce, useMount } from "../../utils";
import List from "./List";
import SearchPanel from "./SearchPanel";
import qs from "qs";
const apiUrl = process.env.REACT_APP_API_URL;
console.log(apiUrl);
// const apiUrl = "http://localhost:4000";
export default function ProjectList() {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);

  const debouncedParams = useDebounce(param, 500);

  useEffect(() => {
    fetch(
      `${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParams))}`
    ).then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [debouncedParams]);
  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });
  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  );
}
