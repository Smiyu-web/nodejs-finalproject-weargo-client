import React, { useState, useEffect } from "react";
import Link from "next/link";
import Axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState();

  useEffect(() => console.log(userData), [userData]);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRef = await Axios.post(
        "http://localhost:4000/users/login",
        loginUser
      );

      setUserData(loginRef);
    } catch (err) {
      console.log(err.response.data.msg);
    }
  };

  return (
    <div className="pt-28 flex flex-col items-center">
      <h2 className="py-6">Log In</h2>
      <div>
        <form onSubmit={submit}>
          <div className="input_wrapper">
            <label>Email</label>
            <input
              type="email"
              id="login-email"
              name="login-email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input_wrapper">
            <label>Password</label>
            <input
              type="password"
              id="login-password"
              name="login-password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-center">
            <input className="input_btn" type="submit" value="Log in" />
          </div>
        </form>
      </div>
      <div className="text-center">
        <p>You don't have an account?</p>
        <Link href="/user/signup">
          <a className="a_tag">Sign up</a>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
