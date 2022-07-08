import React from "react";

const user = {
  name: "Debbie Lewis",
  handle: "deblewis",
  email: "debbielewis@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80",
};

function Password() {
  return (
    <div>
      <form
        className="divide-y divide-gray-200 lg:col-span-9"
        action="#"
        method="POST"
      >
        {/* Profile section */}
        <div className="py-6 px-4 sm:p-6 lg:pb-8">
          <div>
            <h2 className="text-lg leading-6 font-medium text-gray-900">
              Password
            </h2>
            <p className="mt-1 text-sm text-gray-500">Change your password.</p>
          </div>

          <div className="mt-6 grid grid-cols-12 gap-6">
            <div className="col-span-12">
              <label
                htmlFor="url"
                className="block text-sm font-medium text-gray-700"
              >
                Current password
              </label>
              <input
                type="text"
                name="url"
                id="url"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
              />
            </div>
            <div className="col-span-12">
              <label
                htmlFor="url"
                className="block text-sm font-medium text-gray-700"
              >
                New password
              </label>
              <input
                type="text"
                name="url"
                id="url"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
              />
            </div>
            <div className="col-span-12">
              <label
                htmlFor="url"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm new password
              </label>
              <input
                type="text"
                name="url"
                id="url"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
              />
            </div>

            <div className="col-span-12">
              <button className="px-4 py-2 bg-teal-100 font-poppins rounded-md text-teal-500">
                Save
              </button>
             
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Password;
