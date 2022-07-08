import React from "react";
import { PaperClipIcon } from "@heroicons/react/solid";

const user = {
  name: "Debbie Lewis",
  handle: "deblewis",
  email: "debbielewis@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80",
};

function ProfileInfo({ setActiveStyle }: any) {
  return (
    <>
      <div className="px-4 py-5 sm:px-6 font-poppins">
        <div className="mt-1 lg:hidden">
          <div className="flex items-center">
            <div
              className="flex-shrink-0 inline-block rounded-full overflow-hidden h-28 w-28"
              aria-hidden="true"
            >
              <img
                className="rounded-full h-full w-full"
                src={user.imageUrl}
                alt=""
              />
            </div>

            <div className="sm:col-span-1 ml-8">
              <dt className="text-sm font-medium text-gray-500">
                Display name
              </dt>
              <dd className="mt-1 text-sm text-gray-900">Master of None</dd>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6 font-poppins">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900">Margot Foster</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Date of birth</dt>
            <dd className="mt-1 text-sm text-gray-900">April 1, 1984</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900">
              margotfoster@example.com
            </dd>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Country or region
            </dt>
            <dd className="mt-1 text-sm text-gray-900">United Kingdom</dd>
          </div>
          <div className="col-span-2 sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">Bio</dt>
            <dd className="mt-1 text-sm text-gray-900">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
              incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
              consequat sint. Sit id mollit nulla mollit nostrud in ea officia
              proident. Irure nostrud pariatur mollit ad adipisicing
              reprehenderit deserunt qui eu.
            </dd>
          </div>
          


          <div className="col-span-2 sm:col-span-2">
            <button
              className="px-4 py-2 bg-teal-100 font-poppins rounded-md text-teal-500"
              onClick={() => setActiveStyle("Edit Profile")}
            >
              Edit Profile
            </button>
          </div>
        </dl>
      </div>
    </>
  );
}

export default ProfileInfo;

{
  /* <div className="mt-1 lg:hidden">
          <div className="flex items-center">
            <div
              className="flex-shrink-0 inline-block rounded-full overflow-hidden h-28 w-28"
              aria-hidden="true"
            >
              <img
                className="rounded-full h-full w-full"
                src={user.imageUrl}
                alt=""
              />
            </div>
            <div className="ml-5 rounded-md shadow-sm">
              <div className="group relative border border-gray-300 rounded-md py-2 px-3 flex items-center justify-center hover:bg-gray-50 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-sky-500">
                <label
                  htmlFor="mobile-user-photo"
                  className="relative text-sm leading-4 font-medium text-gray-700 pointer-events-none"
                >
                  <span>Change</span>
                  <span className="sr-only"> user photo</span>
                </label>
                <input
                  id="mobile-user-photo"
                  name="user-photo"
                  type="file"
                  className="absolute w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div> */
}
