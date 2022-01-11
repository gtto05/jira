import React, { FormEventHandler } from "react";

const apiUrl = process.env.REACT_APP_API_URL;

export const LoginForm = () => {
  const Login = (params: { username: string; password: string }) => {
    fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then(async (response) => {
      if (response.ok) {
      }
    });
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    Login({ username, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username"></label>
        <input type="text" name="username" placeholder="Username" />
      </div>
      <div>
        <label htmlFor="password"></label>
        <input type="password" name="password" placeholder="Password" />
      </div>
      <button>登录</button>
    </form>
  );
};
