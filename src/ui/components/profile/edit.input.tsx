import React from "react";

function EditInput({
  title,
  onChange,
  value,
  placeholder,
  type,
  name,
  id,
  className,
}: any) {
  return (
    <>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {title}
      </label>
      {id === "bio" ? (
        <>
          <div className="mt-1">
            <textarea
              name={name}
              id={id}
              placeholder={placeholder}
              defaultValue={value}
              onChange={onChange}
              className={className}
              rows={3}
            />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Brief description for your profile. URLs are hyperlinked.
          </p>{" "}
        </>
      ) : (
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={className}
        />
      )}
    </>
  );
}

export default EditInput;
