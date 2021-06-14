import React from "react";
import Button from "../../ui/Button";
import InputWrapper from "../../ui/InputWrapper";

const Signup = () => {
  return (
    <div className="pt-36">
      <h2>Sign Up</h2>
      <div>
        <InputWrapper title="Name" type="name" name="name" />
        <InputWrapper title="Email" type="email" name="email" />
        <InputWrapper title="Password" type="password" name="password" />
        <InputWrapper
          title="Confirm Password"
          type="password"
          name="confirm password"
        />
      </div>
      <div>
        <Button button="Sign up" />
      </div>
      <div>
        <h6>Do you already have an account?</h6>
        <a href="">Log in</a>
      </div>
    </div>
  );
};

export default Signup;
