import React from "react";

export default function ConfirmButton(props: {
  text: "" | string;
  className?: "" | string;
  children?: React.ReactNode;
}) {
  const { text, className, children } = props;

  return (
    <button
      type="submit"
      className={
        className +
        " group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      }
    >
      {children}
      {text}
    </button>
  );
}
