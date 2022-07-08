import HomeOverview from "../shells/home.overview";

import { useState } from "react";
import { Switch } from "@headlessui/react";
import {} from "@heroicons/react/solid";

import ProfileInfo from "../components/profile/profileinfo";
import Password from "../components/profile/password";
import EditProfile from "../components/profile/editprofile";
import Subnav from "../components/profile/subnav";

export default function Profile() {
  const [activeStyle, setActiveStyle] = useState("Profile");

  return (
    <HomeOverview includeNav>
      <main className="relative mt-8">
        <div className=" mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
          <div className="bg-white h-fit rounded-lg shadow overflow-hidden md:mx-12">
            <div className="divide-y divide-gray-200 md:grid md:grid-cols-12 md:divide-y-0 md:divide-x">
              <Subnav
                activeStyle={activeStyle}
                setActiveStyle={setActiveStyle}
              />

              <div className="divide-y divide-gray-200 md:col-span-10 mr-2 md:mr-10 px-4 sm:p-6 md:p-10 lg:pb-16 lg:p-14">
                {activeStyle === "Profile" && (
                  <ProfileInfo setActiveStyle={setActiveStyle} />
                )}
                {activeStyle === "Password" && <Password />}
                {activeStyle === "Edit Profile" && <EditProfile />}
              </div>
            </div>
          </div>
        </div>
      </main>
    </HomeOverview>
  );
}
