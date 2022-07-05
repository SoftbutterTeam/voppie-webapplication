import HomeOverview from "../shells/home.overview";

import { useState } from "react";
import { Switch } from "@headlessui/react";
import {} from "@heroicons/react/solid";
import {
  BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
  UserCircleIcon,
  ViewGridAddIcon,
} from "@heroicons/react/outline";
import ProfileInfo from "../components/profile/profileinfo";

const subNavigation = [
  { name: "Profile", href: "#", icon: UserCircleIcon, current: true },
  { name: "Account", href: "#", icon: CogIcon, current: false },
  { name: "Password", href: "#", icon: KeyIcon, current: false },
  { name: "Notifications", href: "#", icon: BellIcon, current: false },
  { name: "Billing", href: "#", icon: CreditCardIcon, current: false },
  { name: "Integrations", href: "#", icon: ViewGridAddIcon, current: false },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Profile() {
  const [activeStyle, setActiveStyle] = useState("Profile");

  return (
    <HomeOverview includeNav>
      <main className="relative mt-8">
        <div className=" mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
          <div className="bg-white h-fit rounded-lg shadow overflow-hidden md:mx-12">
            <div className="divide-y divide-gray-200 md:grid md:grid-cols-12 md:divide-y-0 md:divide-x">
              <aside className="py-6 md:col-span-2">
                <nav className="space-y-1">
                  {subNavigation.map((item) => (
                    <div
                      key={item.name}
                      onClick={() => {
                        setActiveStyle(item.name);
                      }}
                    >
                      <a
                        href={item.href}
                        className={classNames(
                          activeStyle === item.name
                            ? "bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700"
                            : "border-transparent text-gray-900 hover:bg-teal-50/75 hover:border-teal-100 hover:text-gray-900",
                          "group border-l-4 px-3 py-2 flex items-center text-sm font-medium w-full"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <item.icon
                          className={classNames(
                            activeStyle === item.name
                              ? "text-teal-500 group-hover:text-teal-500"
                              : "text-gray-400 group-hover:text-gray-500",
                            "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        <span className="truncate">{item.name}</span>
                      </a>
                    </div>
                  ))}
                </nav>
              </aside>

              <div className="divide-y divide-gray-200 md:col-span-10 mx-2 md:mx-10 px-4 sm:p-6 md:p-10 lg:pb-16 lg:p-14">

                  {activeStyle === "Profile" && (<ProfileInfo />)}

              </div>
            </div>
          </div>
        </div>
      </main>
    </HomeOverview>
  );
}

