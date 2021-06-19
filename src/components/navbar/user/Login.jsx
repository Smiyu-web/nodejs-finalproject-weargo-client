import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Link from "next/link";
import Axios from "axios";
import { setCurrentUser, login } from "../../../features/userSlice";

const Signup = React.forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isUser = useSelector(setCurrentUser);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => console.log(isUser), [isUser]);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRef = await Axios.post(
        "http://localhost:4000/users/login",
        loginUser
      );

      dispatch(login(loginRef.data.user));
      // history.push("/");
    } catch (err) {
      console.log(err.response.data.msg);
    }
  };

  return (
    <div className="pt-28 flex flex-col items-center" ref={ref}>
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
});

export default Signup;
