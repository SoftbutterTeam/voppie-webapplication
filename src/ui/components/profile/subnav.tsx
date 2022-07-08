import React from "react";
import { subNavigation } from "../../../data/mock";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

function Subnav({ activeStyle, setActiveStyle }: any) {
  return (
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
  );
}

export default Subnav;
