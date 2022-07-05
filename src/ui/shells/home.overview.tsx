import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";
import Navbar from "../components/navbar";
import { navigation } from "../../data/mock";
import Sidebar from "../components/sidebar";
const avatar = require("../../assets/images/creator.png");

function HomeOverview({
  children,
  includeSearchBar,
  includeNav,
  includeSidebar,
}: any) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        {includeSidebar && (
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        )}

        <div
          className={`${
            includeSidebar
              ? "md:pl-64 flex flex-col flex-1"
              : " flex flex-col flex-1"
          }`}
        >
          {includeNav && (
            <Navbar
              setSidebarOpen={setSidebarOpen}
              includeSearchBar={includeSearchBar}
            />
          )}

          {children}
        </div>
      </div>
    </>
  );
}

export default HomeOverview;
