import React from "react";
import { FullAuthLayout } from "../../../layouts/page-layout";

export function Login() {
  return (
    <FullAuthLayout>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-md  space-y-8">
          <LoginPanel />
        </div>
      </div>
    </FullAuthLayout>
  );
}

function LoginPanel() {
  return (
    <div className=" flex flex-col min-w-[250px] max-w-[400px] w-full bg-slate-400  justify-center items-center">
      <form className=" bg-slate-200 w-full mx-auto p-8 space-y-6 ">
        <div className="flex justify-cente  ">
          <button className="cursor-pointer bg-black text-white min-w-full w-full py-2 rounded-md -mt-3">
            Continue with Apple
          </button>
        </div>
      </form>
    </div>
  );
}
