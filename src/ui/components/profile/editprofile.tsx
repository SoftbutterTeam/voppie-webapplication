import { PencilIcon } from "@heroicons/react/solid";
import React, { useRef } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { COUNTRIES } from "../../../data/countries";
import { GENDERS } from "../../../data/gender";
import { SelectMenuOption } from "../../../types";
import Birthdate from "./birthdate";
import { CountrySelector } from "./country.selector";
import { GenderSelector } from "./gender.selector";


const userInfo = {
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80",
  bYear: new Date().getFullYear(),
  bMonth: new Date().getMonth() + 1,
  bDay: new Date().getDate(),
};

function EditProfile() {
  const myRef = React.createRef<HTMLDivElement>();
  const genderRef = React.createRef<HTMLDivElement>();
  const imageInputRef = React.createRef<HTMLInputElement>();
  const [error, setError] = useState("");
  const [commentImage, setCommentImage] = useState(
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80"
  );

  

  const handleImage = (e: any) => {
    let file = e.target.files[0];
    if (
      file.type !== "image/jpeg" &&
      file.type !== "image/png" &&
      file.type !== "image/webp" &&
      file.type !== "image/gif"
    ) {
      setError(`${file.name} format is not supported.`);
      return;
    } else if (file.size > 1024 * 1024 * 5) {
      setError(`${file.name} is too large max 5mb allowed.`);
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event: any) => {
      setCommentImage(event?.target?.result);
    };
  };

  const [users, setUsers] = useState(userInfo);
  const handleRegisterChange = (e: any) => {
    const { name, value } = e.target;
    setUsers({ ...users, [name]: value });
  };

  const { bYear, bMonth, bDay } = users;

  const tempYear = new Date().getFullYear();

  const years = Array.from(new Array(108), (val, index) => tempYear - index);
  const months = Array.from(new Array(12), (val, index) => 1 + index);
  const getDays = () => {
    return new Date(bYear, bMonth, 0).getDate();
  };

  const days = Array.from(new Array(getDays()), (val, index) => 1 + index);

  const [displayName, setDisplayName] = useState("deblewis");
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Wick");
  const [bio, setBio] = useState(
    "Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. "
  );

  const [isOpen, setIsOpen] = useState(false);
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  // Default this to a country's code to preselect it
  const [country, setCountry] = useState("GB");
  const [gender, setGender] = useState("M");

  const consoleThisLog = (e: any) => {
    e.preventDefault();
    console.log(`users`, users);
    console.log(`displayName`, displayName);
    console.log(`firstName`, firstName);
    console.log(`lastName`, lastName);
    console.log(`bio`, bio);
    console.log(`country`, country);
    console.log(`gender`, gender);
    console.log(`commentImage`, commentImage)
  };

  const notify = () =>
    toast.success("Profile Updated", {
      duration: 4000,
    });

  return (
    <div>
      <form className="divide-y divide-gray-200 lg:col-span-9" action="#">
        {/* Profile section */}
        <div className="py-6 px-4 sm:p-6 lg:pb-8">
          <div className="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0">
            <div className="mt-1 lg:hidden relative">
              <div className="h-7 w-7 bg-gray-100 border-2 border-gray-200 shadow-lg rounded-full absolute top-1 left-1 flex justify-center items-center cursor-pointer">
                <PencilIcon className="h-4 w-4 text-black cursor-pointer" />
                <input
                  id="mobile-user-photo"
                  name="user-photo"
                  multiple={false}
                  type="file"
                  className="absolute w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                  ref={imageInputRef}
                  onChange={handleImage}
                />
              </div>
              <div className="flex items-center">
                <div
                  className="flex-shrink-0 inline-block rounded-full overflow-hidden h-32 w-32 "
                  aria-hidden="true"
                >


                  <img
                    src={commentImage}
                    className="rounded-full h-full w-full"
                    alt=""
                  />
                </div>
                <div className="w-full ml-6 sm:ml-10 md:ml-12">
                  <label
                    htmlFor="displayName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Display Name
                  </label>
                  <div className="mt-1 rounded-md shadow-sm  flex">
                    <input
                      type="text"
                      name="displayName"
                      id="displayName"
                      autoComplete="displayName"
                      onChange={(e) => setDisplayName(e.target.value)}
                      className="focus:ring-sky-500 focus:border-sky-500 flex-grow block w-full min-w-0 rounded-md sm:text-sm border-gray-300"
                      value={displayName}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col lg:flex-row"></div>

          <div className="mt-6 grid grid-cols-12 gap-6">
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                First name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                autoComplete="given-name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
              />
            </div>

            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Last name
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                autoComplete="family-name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
              />
            </div>

            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Birthday
              </label>
              <Birthdate
                bDay={bDay}
                bMonth={bMonth}
                bYear={bYear}
                days={days}
                months={months}
                years={years}
                handleRegisterChange={handleRegisterChange}
              />
            </div>

            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <CountrySelector
                id={"countries"}
                ref={myRef}
                open={isOpen}
                onToggle={() => setIsOpen(!isOpen)}
                onChange={(val) => setCountry(val)}
                // We use this type assertion because we are always sure this find will return a value but need to let TS know since it could technically return null
                selectedValue={
                  COUNTRIES.find(
                    (option) => option.value === country
                  ) as SelectMenuOption
                }
              />
            </div>

            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Gender
              </label>
              <GenderSelector
                id={"genders"}
                ref={genderRef}
                open={isGenderOpen}
                onToggle={() => setIsGenderOpen(!isGenderOpen)}
                onChange={(val) => setGender(val)}
                // We use this type assertion because we are always sure this find will return a value but need to let TS know since it could technically return null
                selectedValue={
                  GENDERS.find(
                    (option) => option.value === gender
                  ) as SelectMenuOption
                }
              />
            </div>

            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Bio
              </label>
              <div className="mt-1">
                <textarea
                  id="bio"
                  name="bio"
                  onChange={(e) => setBio(e.target.value)}
                  rows={3}
                  defaultValue={bio}
                  className="shadow-sm focus:ring-sky-500 focus:border-sky-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Brief description for your profile. URLs are hyperlinked.
              </p>
            </div>

            <div className="sm:col-span-6 col-span-12">
              <button
                className="px-4 py-2 bg-teal-100 font-poppins rounded-md text-teal-500"
                onClick={(e) => {
                  consoleThisLog(e);
                  notify();
                }}
              >
                Save Info
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
