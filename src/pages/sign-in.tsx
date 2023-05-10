import React from "react";
import { SignInButton } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div>
      <SignInButton redirectUrl="/" />
    </div>
  );
};

export default SignInPage;
