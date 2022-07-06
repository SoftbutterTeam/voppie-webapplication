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
  return <>abbcc</>;
}
