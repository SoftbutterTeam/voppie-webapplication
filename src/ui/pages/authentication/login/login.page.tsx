import React from "react";
import { LeftPanelledLayout } from "../../../layouts/page-layout";

import { FaApple } from "react-icons/fa";
import { googleI } from "../../../../assets/icons/services";
import { CenteredLayout } from "../../../layouts/page-layout/centered.layout";

export function LoginPage() {
  return (
    <LeftPanelledLayout secondaryContent={secondaryContent}>
      <LoginPanel />
      <TermsandconditionText />
    </LeftPanelledLayout>
  );

  function secondaryContent() {
    return <div className=""></div>;
  }

  function TermsandconditionText() {
    return (
      <p className="max-w-[450px] w-full mx-auto  lg:absolute bottom-20  px-5 text-center text-ti font-light text-neutral-400">
        By joining Voppie, you agree to our{" "}
        <span className="font-light underline">Terms & Conditions</span> and{" "}
        <span className="font-light underline">Privacy Policy</span>.
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
      <p className="text-sm">Don't have an account yet? Join</p>
    </div>
  );

  function Loginform() {
    return (
      <form className="max-w-sm w-full mx-auto p-8 space-y-4  ">
        <InputA1 type="email" placeholder="email address" />
        <InputA1 type="password" placeholder="password" />
        {hasEmailLoginError() && <p className="text-sm">Forgot password?</p>}

        <ButtonA1 className=" bg-orange-600 font-medium text-white border-0 ">
          Log in
        </ButtonA1>
        <OrDivide />
        <ButtonA1 className=" bg-white ">Continue with Facebook</ButtonA1>
        <ButtonA1 className=" bg-white ">Continue with Google</ButtonA1>
        <ButtonA1 className="bg-white">Conintue with Apple</ButtonA1>
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
      <div className="bg-gray-200 shadow h-[1px] w-full ml-2" />
    </div>
  );
}
interface Props {
  className?: string;
  children?: React.ReactNode;
}
function ButtonA1({ className, children }: Props) {
  return (
    <button
      className={
        "cursor-pointer border border-slate-300 shadow-sm  w-full py-2 rounded-lg -mt-3 " +
        className
      }
    >
      {children}
    </button>
  );
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
