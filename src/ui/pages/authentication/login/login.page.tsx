import React from "react";
import { AuthLayout } from "../../../layouts/page-layout";

import { FaApple } from "react-icons/fa";
import { googleI } from "../../../../assets/icons/services";

export function Login() {
  return (
    <AuthLayout>
      <form className="max-w-sm w-full mx-auto p-8 space-y-3 ">
        <input className="cursor-pointer bg- shadow-sm   w-full py-2 rounded-lg -mt-3" />

        <button className="cursor-pointer bg-orange-600 text-white  shadow   w-full py-2 rounded-lg -mt-3">
          Continue
        </button>

        <button className="cursor-pointer bg-black text-white  shadow-sm   w-full py-2 rounded-lg -mt-3">
          Continue with Apple
        </button>
        <button className="cursor-pointer  border shadow-sm   w-full py-2 rounded-lg -mt-3">
          Continue with Google
        </button>
      </form>
      <p className="max-w-[450px] w-full mx-auto  absolute bottom-20 px-5 text-center text-ti text-neutral-400">
        By clicking “Continue” above, you acknowledge that you have read and
        understood, and agree to Company{" "}
        <span className="font-semibold underline">Terms & Conditions</span> and{" "}
        <span className="font-semibold underline">Privacy Policy</span>.
      </p>
    </AuthLayout>
  );
}

function LoginPanel() {
  return (
    <>
      <form className="max-w-[400px] w-full mx-auto p-8 space-y-6 ">
        <div className="flex justify-center">
          <button className="cursor-pointer bg-black text-white w-full py-2 rounded-md -mt-3">
            Continue with Apple
          </button>
        </div>
      </form>

      <p className="max-w-[450px] w-full mx-auto font-poppins absolute bottom-20 text-center text-xs">
        By clicking “Continue” above, you acknowledge that you have read and
        understood, and agree to Craft’s{" "}
        <span className="font-semibold underline">Terms & Conditions</span> and{" "}
        <span className="font-semibold underline">Privacy Policy</span>.
      </p>
    </>
  );
}
