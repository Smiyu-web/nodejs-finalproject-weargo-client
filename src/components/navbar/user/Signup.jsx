import React, { useState } from "react";
import Link from "next/link";
import InputWrapper from "../../ui/InputWrapper";

const Signup = React.forwardRef((props, ref) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  return (
    <div className="pt-28 flex flex-col items-center" ref={ref}>
      <h2 className="py-6">Sign Up</h2>
      <div>
        <form>
          <InputWrapper
            title="Name"
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <InputWrapper
            title="Email"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputWrapper
            title="Password"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputWrapper
            title="Confirm Password"
            type="password"
            name="confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="text-center">
            <input className="input_btn" type="button" value="Sign up" />
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
});

export default Signup;
