import React from "react";
import { LeftPanelledLayout } from "../../../layouts/page-layout";

import { FaApple, FaFacebookF } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";

import { googleI } from "../../../../assets/icons/services";
import { DecoratedLeftPanalledLayout } from "../../../layouts/page-layout/decoratedleftpan.layout";

export function RegisterPage() {
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
  //* border can be removed - it was meant for popup design demostration. but that will be in a parent emelent to loginpanel
  return (
    <div className="max-w-md overflow-hidden rounded-xl border bg-white shadow-black  shaodw-md text-center py-5 ">
      <h1 className="text-xl font-bold mt-5 "> Join Voppie</h1>
      <Loginform />
      <p className="text-sm text-slate-800 ">
        Already have an account?{" "}
        <span className="text-sm  cursor-pointer text-orange-600">Log in</span>
      </p>
    </div>
  );

  function Loginform() {
    return (
      <form className="max-w-sm w-full mx-auto p-8 space-y-4  ">
        <input
          className="main-input"
          type="text"
          autoComplete="name"
          placeholder="full name or nickname"
        />
        <input
          className="main-input"
          type="email"
          autoComplete="email"
          placeholder="email address"
        />
        <input
          className="main-input"
          type="password"
          autoComplete="new-password"
          placeholder="password"
        />
        {
          //* new-password is for new passwords. current-password is for login page.
        }

        <button className="main-btn  bg-orange-600 font-medium text-white border-0 ">
          Join
        </button>
        <OrDivide />

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
