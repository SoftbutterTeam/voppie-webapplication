import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  ChevronDownIcon,
  MenuAlt2Icon,
} from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";
import { userNavigation } from "../../data/mock";
import { useNavigate } from "react-router";
const avatar = require("../../assets/images/creator.png");

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

function Navbar({ setSidebarOpen, includeSearchBar }: any) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeStyle, setActiveStyle] = useState("Dashboard");

  const navigate = useNavigate();

  console.log(`searchQuery`, searchQuery);

  return (
    <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
      <button
        type="button"
        className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none  md:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="flex-1 px-4 flex justify-between">
        {!includeSearchBar && (
          <div
            className="h-full flex items-center space-x-4 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <img
              className="h-7 w-7 sm:h-10 sm:w-10 rounded-full"
              src={avatar}
              alt=""
            />
            <p>VOPPI</p>
          </div>
        )}

        {/* -------------------------------- SEARCH BAR -------------------------------- */}

        {includeSearchBar && (
          <div className="flex-1 flex">
            <form className="w-full flex my-2  md:ml-0" action="#" method="GET">
              <label htmlFor="search-field" className="sr-only">
                Search
              </label>
              <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  className="block w-full h-full pl-10 pr-3 py-2 border-transparent rounded-md bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-base"
                  placeholder="Search"
                  id="search-field"
                  type="search"
                  // name="search"

                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>
          </div>
        )}

        {/* -------------------------------- SEARCH BAR -------------------------------- */}

        <div
          className={`${
            includeSearchBar
              ? "ml-2 flex items-center md:ml-3"
              : "ml-auto flex items-center"
          }`}
        >
          <button
            type="button"
            className="hidden sm:inline-flex bg-white p-1 mr-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* -------------------------------- Profile dropdown -------------------------------- */}

          {/* <Menu as="div" className="ml-3 relative">
            <div>
              <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none ">
                <span className="sr-only">Open user menu</span>
                <img className="h-8 w-8 rounded-full" src={avatar} alt="" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                {userNavigation.map((item) => (
                  <Menu.Item key={item.name}>
                    {({ active }) => (
                      <a
                        href={item.href}
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        {item.name}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu> */}

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex items-center space-x-1 sm:space-x-2 justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                <p className="hidden sm:inline-flex">Username</p>
                <img
                  className="h-7 w-7 sm:h-8 sm:w-8 rounded-full"
                  src={avatar}
                  alt=""
                />
                <ChevronDownIcon
                  className="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                <div className="py-1">
                  {userNavigation.map((item, i) => (
                    <div
                      className="py-1"
                      onClick={() => {
                        setActiveStyle(item.name);
                      }}
                    >
                      <Menu.Item key={i}>
                        {({ active }) => (
                          <div>
                            <a
                              href={item.href}
                              className={classNames(
                                activeStyle === item.name
                                  ? "bg-gray-100 mx-1 rounded-md text-gray-900"
                                  : "text-gray-700 hover:bg-gray-50 mx-1 rounded-md",
                                "group flex items-center px-4 py-2 text-sm "
                              )}
                            >
                              <item.icon
                                className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                              {item.name}
                            </a>
                          </div>
                        )}
                      </Menu.Item>
                    </div>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          {/* -------------------------------- Profile dropdown -------------------------------- */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
