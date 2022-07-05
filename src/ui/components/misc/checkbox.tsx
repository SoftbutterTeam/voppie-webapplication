import React from "react";

export default function Checkbox(props: {
  [x: string]: any;
  id: any;
  name?: "" | string;
  wrapperClassName?: "" | string;
  label?: "" | string;
}) {
  const { id, name, wrapperClassName, initalValue, label, ...rest } = props;

  return (
    <div className={wrapperClassName + " flex items-center"}>
      <input
        id={id}
        name={name}
        type="checkbox"
        value={name}
        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        {...rest}
      />
      <label htmlFor={name} className="ml-2 block text-sm text-gray-900">
        {label}
      </label>
    </div>
  );
}
