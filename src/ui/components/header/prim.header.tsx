import React, { ComponentProps, Key, ReactPropTypes } from "react";

/* eslint-disable jsx-a11y/anchor-is-valid */
export function FullHeader() {
  return (
    <HeaderContainer>
      <div className="relative z-10 px-2 flex lg:px-0">
        <Voppielogo />
      </div>
      <div className="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
        <div className="w-full sm:max-w-xs">
          <Searchbar />
        </div>
      </div>
      <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
        <Usermenu />
      </div>
    </HeaderContainer>
  );
}

function Usermenu() {
  return (
    <div className="flex-shrink-0 relative ml-4">
      {/** profile icon */}
      <div>
        <button
          type="button"
          className="bg-white rounded-full flex focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-orange-600"
          id="user-menu-button"
          aria-expanded="false"
          aria-haspopup="menu"
        >
          <div className="h-8 w-8 rounded-full bg-slate-200 " />
        </button>
      </div>
      {/** user menu
       * placeholder only, needs more functionaily and to know render dependency on isUserLoggedIn
       */}
      <div
        className="hidden transform scale-95 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white border border-y-0 py-1 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu-button"
        tabIndex={-1}
      >
        <a
          href="#"
          className="block py-2 px-4 text-sm text-gray-700"
          role="menuitem"
          tabIndex={-1}
          id="user-menu-item-0"
        >
          My Profile
        </a>

        <a
          href="#"
          className="block py-2 px-4 text-sm text-gray-700"
          role="menuitem"
          tabIndex={-1}
          id="user-menu-item-1"
        >
          Settings
        </a>

        <a
          href="#"
          className="block py-2 px-4 text-sm text-gray-700"
          role="menuitem"
          tabIndex={-1}
          id="user-menu-item-2"
        >
          Sign out
        </a>
      </div>
    </div>
  );
}

function Searchbar() {
  return (
    <div>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <input
          id="search"
          name="search"
          className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-orange-600  focus:border-transparent  sm:text-sm"
          placeholder=""
          type="search"
          autoComplete="off"
        />
      </div>
    </div>
  );
}

function Voppielogo() {
  return (
    <div className="flex-shrink-0 flex items-center">
      <h1 className="font-semibold text-2xl text-orange-800 ">Voppie</h1>
    </div>
  );
}

interface Props {
  children: React.ReactNode;
  [keys: string]: any;
}
function HeaderContainer({ children, ...rest }: Props) {
  return (
    <header className="bg-white shadow">
      <div className="max-w-screen-2xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
        <div className="relative h-16 flex justify-between">{children}</div>
      </div>
    </header>
  );
}
