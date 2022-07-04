import React from "react";
const bgLogin = require("../../assets/images/bg-login.jpg");

function Login() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img src={bgLogin} alt="" className="h-full w-full object-cover contrast-120" />
      </div>
      <div className="bg-[#070102]/95 text-white flex flex-col justify-center items-center">
        <form className="max-w-[400px] w-full mx-auto p-8 space-y-6">
          <h2 className="font-semibold text-[24px] text-center leading-4">Lets get started</h2>
          <p className="text-center text-[#9da0a3]">Please enter you email to continue</p>
          <div className="flex flex-col text-gray-500 py-2">

            <input type="text" placeholder="Enter your email address" className="rounded-md outline-none focus:outline-none" />
          </div>
          <div className="flex justify-center">
              <button className="cursor-not-allowed bg-[#1d5b72] w-full py-2 rounded-md -mt-3">Continue</button>
          </div>

          <div className="w-full flex items-center">
              <div className="bg-[#555454] h-[1px] w-full ml-1" />
              <p className="mx-2 text-[#555454] text-sm">or</p>
              <div className="bg-[#555454] h-[1px] w-full ml-1" />
          </div>

          <div className="flex justify-center">
              <button className="cursor-not-allowed bg-white text-black font-poppins w-full py-2 rounded-md -mt-3">Continue with Apple</button>
          </div>
          <div className="flex justify-center">
              <button className="cursor-not-allowed bg-[#323232] text-[#dfdfdf] w-full py-2 rounded-md -mt-3">Continue with Google</button>
          </div>
          {/* <div className="flex flex-col items-center">
            <p>
              <input type="checkbox" /> Remember Me
            </p>
            <p>Forgot your password?</p>
          </div> */}


        </form>
      </div>
    </div>
  );
}

export default Login;
