import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";

import Link from "next/link";

import { login } from "../../../features/userSlice";
import ErrorNotice from "../../ui/ErrorNotice";

const Signup = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [error, setError] = useState();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const newUser = {
        name,
        email,
        password,
        confirmPassword: confirmPassword,
      };
      await Axios.post("http://localhost:4000/users/signup", newUser);

      // auth login
      const loginUser = { email, password };
      const loginRef = await Axios.post(
        "http://localhost:4000/users/login",
        loginUser
      );

      dispatch(login(loginRef.data.user));
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div className="pt-28 flex flex-col items-center">
      <h2 className="py-6">Sign Up</h2>

      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}

      <div>
        <form onSubmit={submit}>
          <div className="input_wrapper">
            <label>Name</label>
            <input
              type="name"
              id="signup-name"
              name="signup-name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input_wrapper">
            <label>Email</label>
            <input
              type="email"
              id="signup-email"
              name="signup-email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input_wrapper">
            <label>Password</label>
            <input
              type="password"
              id="signup-password"
              name="signup-password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input_wrapper">
            <label>Confirm Password</label>
            <input
              type="password"
              id="signup-passwordConfirm"
              name="signup-passwordConfirm"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="text-center">
            <input className="input_btn" type="submit" value="Sign up" />
          </div>
        </form>
      </div>
      <div className="text-center">
        <p>Do you already have an account?</p>
        <Link href="/user/login">
          <a>Log in</a>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
