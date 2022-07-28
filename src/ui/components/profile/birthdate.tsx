import React from "react";

function Birthdate({
  bDay,
  bMonth,
  bYear,
  days,
  months,
  years,
  handleRegisterChange,
  dateError
}: any) {
  return (
    <div className="flex space-x-2">
      <select name="bDay" value={bDay} onChange={handleRegisterChange} className="mt-1 flex w-auto border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm">
        {days.map((day: any, i: any) => (
          <option className="h-32" value={day} key={i}>
            {day}
          </option>
        ))}
      </select>
      <select name="bMonth" value={bMonth} onChange={handleRegisterChange} className="mt-1 flex w-auto border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm">
        {months.map((month: any, i: any) => (
          <option value={month} key={i}>
            {month}
          </option>
        ))}
      </select>
      <select name="bYear" value={bYear} onChange={handleRegisterChange} className="mt-1 flex w-auto border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm">
        {years.map((year: any, i: any) => (
          <option value={year} key={i}>
            {year}
          </option>
        ))}
      </select>
      {dateError && (
      <div className="relative py-2 px-1 bg-error-red w-full text-white text-sm mb-3 rounded-md">
        <div className="error_arrow_bottom"></div>
        {dateError}
      </div>
    )}
    </div>
  );
}

export default Birthdate;
