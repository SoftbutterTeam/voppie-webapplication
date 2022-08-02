import { FaApple } from "react-icons/fa";

import { googleC, facebookColor } from "../../../../assets/icons/services";
import { DecoratedLeftPanalledLayout } from "../../../layouts/page-layout/decoratedleftpan.layout";
import { useNavigate } from "react-router";

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
        <span className="font-light text-secondary cursor-pointer ">
          Terms & Conditions
        </span>{" "}
        and{" "}
        <span className="font-light  text-secondary cursor-pointer ">
          Privacy Policy
        </span>
        .
      </p>
    );
  }
}

function LoginPanel() {
  const navigate = useNavigate();
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
        <span
          className="text-sm  cursor-pointer text-secondary"
          onClick={() => navigate("/join")}
        >
          Join
        </span>
      </p>
    </div>
  );

  function Loginform() {
    return (
      <form className="max-w-sm w-full mx-auto p-8 space-y-4  ">
        <input
          type="email"
          placeholder="email address"
          className="main-input"
        />
        <input type="password" placeholder="password" className="main-input" />
        {hasEmailLoginError() && (
          <p className="text-sm text-slate-800 cursor-pointer ">
            Forgot password?
          </p>
        )}

        <button className="main-btn bg-primary hover:scale-105 duration-300 font-medium text-white border-0 ">
          Log in
        </button>
        <OrDivide />
        <button className="icon-login-btn group">
          <img
            src={facebookColor}
            className="icon-login  duration-300"
            alt="facebook"
          />
          <p className="mx-auto font-medium duration-300">
            {" "}
            Continue with Facebook
          </p>
        </button>
        <button className="icon-login-btn group">
          <img
            src={googleC}
            className="icon-login duration-300"
            alt="google"
          />
          <p className="mx-auto font-medium duration-300 ">
            {" "}
            Continue with Google
          </p>
        </button>
        <button className="icon-login-btn group">
          <FaApple className="icon-login duration-300 " />
          <p className="mx-auto font-medium duration-300">
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
