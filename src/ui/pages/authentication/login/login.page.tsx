import React from "react";

import { FaApple, FaFacebookF } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";

import { DecoratedLeftPanalledLayout } from "../../../layouts/page-layout/decoratedleftpan.layout";

export function LoginPage() {
  return (
    <DecoratedLeftPanalledLayout>
      <LoginPanel />
      <TermsandconditionText />
    </DecoratedLeftPanalledLayout>
  );

  function TermsandconditionText() {
    return (
      <p className="max-w-[450px] w-full mx-auto  md:absolute bottom-20  px-5 text-center text-ti font-light text-neutral-400">
        By joining Voppie, you agree to our{" "}
        <span className="font-light text-orange-600 cursor-pointer ">
          Terms & Conditions
        </span>{" "}
        and{" "}
        <span className="font-light  text-orange-600 cursor-pointer ">
          Privacy Policy
        </span>
        .
      </p>
    );
  }
}

function LoginPanel() {
  function hasEmailLoginError(): boolean {
    return true;
  }
  //* border can be removed - it was meant for popup design demostration. but that will be in a parent emelent to loginpanel
  return (
    <div className="max-w-md overflow-hidden rounded-xl border bg-white shadow-black  shaodw-md text-center py-5 ">
      <h1 className="text-xl font-bold mt-5 "> Log in to Voppie</h1>
      <Loginform />
      <p className="text-sm text-slate-800 ">
        Don't have an account yet?{" "}
        <span className="text-sm  cursor-pointer text-orange-600">Join</span>
      </p>
    </div>
  );

  function Loginform() {
    return (
      <form className="max-w-sm w-full mx-auto p-8 space-y-4  ">
        <InputA1 type="email" placeholder="email address" />
        <InputA1 type="password" placeholder="password" />
        {hasEmailLoginError() && (
          <p className="text-sm text-slate-800 cursor-pointer ">
            Forgot password?
          </p>
        )}

        <ButtonA1 className=" bg-orange-600 font-medium text-white border-0 ">
          Log in
        </ButtonA1>
        <OrDivide />
        <button className="icon-login-btn group">
          <FaFacebookF className="icon-login group-hover:text-black duration-300" />
          <p className="mx-auto font-medium group-hover:text-black duration-300 ">
            {" "}
            Continue with Facebook
          </p>
        </button>
        <button className="icon-login-btn group">
          <AiOutlineGoogle className="icon-login group-hover:text-black duration-300" />
          <p className="mx-auto font-medium group-hover:text-black duration-300">
            {" "}
            Continue with Google
          </p>
        </button>
        <button className="icon-login-btn group">
          <FaApple className="icon-login group-hover:text-black duration-300" />
          <p className="mx-auto font-medium group-hover:text-black duration-300">
            {" "}
            Continue with Apple
          </p>
        </button>
      </form>
    );
  }
}
interface Props2 {
  text?: string;
}
function OrDivide({ text = "or" }: Props2) {
  return (
    <div className="w-full flex py-2 items-center">
      <div className="bg-gray-200 shadow h-[1px] w-full ml-2" />
      <p className="mx-2 text-slate-500 text-sm">{text}</p>
      <div className="bg-gray-200 shadow h-[1px] w-full mr-2" />
    </div>
  );
}
interface Props {
  className?: string;
  children?: React.ReactNode;
}
function ButtonA1({ className, children }: Props) {
  return <button className={"main-btn " + className}>{children}</button>;
}

interface Props3 {
  type: string;
  placeholder?: string;
  className?: string;
}
function InputA1({ type, placeholder, className }: Props3) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={
        "cursor-auto  border-gray-300  w-full py-2 rounded-md placeholder:text-black placeholder:text-opacity-30 placeholder:font-light " +
        className
      }
    />
  );
}
