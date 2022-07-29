import { PencilIcon } from "@heroicons/react/solid";
import { Form, Formik } from "formik";
import React, { useRef } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { COUNTRIES } from "../../../data/countries";
import * as Yup from "yup";
import { GENDERS } from "../../../data/gender";
import { SelectMenuOption } from "../../../types";
import Birthdate from "./birthdate";
import { CountrySelector } from "./country.selector";
import { GenderSelector } from "./gender.selector";
import EditInput from "./edit.input";
import { PlusIcon, XIcon } from "@heroicons/react/outline";
import UpdateProfilePicture from "./update.profile.pic";
import { AnimatePresence, motion } from "framer-motion";

const userInfo = {
  displayName: "deblewis",
  firstName: "Harrewh",
  lastName: "Pewter",
  gender: "M",
  country: "GB",
  bio: "BNP till i die",
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
  const [user, setUser] = useState(userInfo);
  const [dateError, setDateError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [show, setShow] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80"
  );

  const [profileImage, setProfileImage] = useState(
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80"
  );

  const [tempProfilePic, setTempProfilePic] = useState(profileImage);

  const { bYear, bMonth, bDay } = user;

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
      setImage(event?.target?.result);
    };
  };

  const handleRegisterChange = (e: any) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

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
    console.log(`profileImage`, profileImage);
    e.preventDefault();
  };

  const notify = () =>
    toast.success("Profile updated successfully", {
      duration: 4000,
    });

  const inputRef = React.createRef<HTMLInputElement>();

  const handleProfileImage = (e: any) => {
    let files = Array.from(e.target.files);

    files.forEach((img: any) => {
      if (
        img.type !== "image/jpeg" &&
        img.type !== "image/webp" &&
        img.type !== "image/gif" &&
        img.type !== "image/png"
      ) {
        setError(
          `${img.name} for is unsupported. Only Jpeg, Png, Webp and Gif are allowed`
        );
        files = files.filter((item: any) => item.name !== img.name);
        return;
      } else if (img.size > 1024 * 1024 * 5) {
        setError(`${img.name} size is too large. Max 5mb allowed`);
        files = files.filter((item: any) => item.name !== img.name);
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onload = (readerEvent: any) => {
        setTempProfilePic(readerEvent?.target?.result);
      };
    });
  };

  console.log(`show`, show);

  return (
    <div>
      {show && (
        <div className="fixed top-0 right-0 left-0 bottom-0 z-50 bg-gray-100/70 duration-1000 transition-all">
          <input
            key={displayName}
            type="file"
            ref={inputRef}
            accept="image/jpeg, image/png, image/webp, image/gif"
            hidden
            onChange={handleProfileImage}
          />

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 200 }}
            className="fixed  inset-x-0 top-28  m-auto  w-[700px] min-h-[228px] h-1/6  bg-white shadow-md rounded-md"
          >
            <div className="relative flex item-center justify-around text-base font-poppins px-4 py-6 border-b-2 border-gray-100">
              <span>Update Profile Picture</span>
              <div
                onClick={() => setShow(false)}
                className="h-7 w-7 rounded-full hover:bg-gray-200 bg-gray-100 absolute right-4 flex duration-300 cursor-pointer items-center justify-center"
              >
                <XIcon className="w-5 h-5" />
              </div>
            </div>
            <div className="py-4 px-4">
              <div className="flexCenter gap-4">
                <button
                  onClick={() => inputRef.current?.click()}
                  className="flex items-center gap-2 duration-300 bg-teal-400 hover:bg-teal-500 px-4 py-2 rounded-md cursor-pointer text-white font-poppins"
                >
                  <PlusIcon className="w-5 h-5" />
                  Upload Photo
                </button>
              </div>
            </div>
            {/* ERROR && GOES HERE */}

            <div className="old_picture_wrap"></div>
          </motion.div>
          <AnimatePresence>
            {profileImage && (
              <UpdateProfilePicture
                inputRef={inputRef}
                setProfileImage={setProfileImage}
                setTempProfilePic={setTempProfilePic}
                tempProfilePic={tempProfilePic}
                setShow={setShow}
              />
            )}
          </AnimatePresence>
        </div>
      )}
      <form className="divide-y divide-gray-200 lg:col-span-9">
        {/* Profile section */}
        <div className="py-6 px-4 sm:p-6 lg:pb-8">
          <div className="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0">
            <div className="mt-1 lg:hidden relative">
              <div className="flex items-center">
                <div
                  className="flex-shrink-0 inline-block rounded-full overflow-hidden h-32 w-32 "
                  aria-hidden="true"
                >
                  <img
                    src={profileImage}
                    onClick={() => {
                      setShow(true);
                    }}
                    className="rounded-full h-full w-full hover:brightness-75 cursor-pointer duration-300"
                    alt=""
                  />
                </div>
                <div className="w-full ml-6 sm:ml-10 md:ml-12">
                  <EditInput
                    title="Display Name"
                    type="text"
                    name="displayName"
                    id="displayName"
                    onChange={(e: any) => setDisplayName(e.target.value)}
                    className="focus:ring-sky-500 mt-1 focus:border-sky-500 flex-grow block w-full min-w-0 rounded-md sm:text-sm border-gray-300"
                    value={displayName}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col lg:flex-row"></div>

          <div className="mt-6 grid grid-cols-12 gap-6">
            <div className="col-span-12 sm:col-span-6">
              <EditInput
                title="First name"
                type="text"
                name="first-name"
                id="first-name"
                value={firstName}
                onChange={(e: any) => setFirstName(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
              />
            </div>

            <div className="col-span-12 sm:col-span-6">
              <EditInput
                title="Last name"
                type="text"
                name="last-name"
                id="last-name"
                value={lastName}
                onChange={(e: any) => setLastName(e.target.value)}
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
                dateError={dateError}
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
              <EditInput
                title="Bio"
                id="bio"
                name="bio"
                onChange={(e: any) => setBio(e.target.value)}
                value={bio}
                className="shadow-sm focus:ring-sky-500 focus:border-sky-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              />
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
