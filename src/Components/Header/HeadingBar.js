import React from "react";
import "./style.css";

const langopt = [
  { value: "English", label: "English" },
  { value: "Vietnamese", label: "Vietnamese" },
];

const money = [
  { value: "USD", label: "USD" },
  { value: "VND", label: "VND" },
];

const HeadingBar = () => {
  return (
    <header className="bg-violet w-full h-[44px] shrink-0 pt-[13px] pb-[13px] flex justify-between items-center px-[200px] text-white py-0">
      {/* Left Menu */}
      <div className="flex space-x-4 gap-[20px]">
        <div className="flex items-center gap-[10px]">
          <ion-icon
            name="mail-outline"
            className="font-JosefinSansBold"
          ></ion-icon>
          <p className="font-JosefinSansBold text-[16px]">
            example@example.com
          </p>
        </div>
        <div className="flex items-center gap-[12px]">
          <ion-icon
            name="call-outline"
            className="font-JosefinSansBold"
          ></ion-icon>
          <p className="font-JosefinSansBold text-[16px]">0123456789</p>
        </div>
      </div>

      {/* Right Menu */}
      <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
          <li className="flex items-center gap-[10px] leading-[44px]">
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              className="flex items-center justify-between w-full py-2 px-3 font-JosefinSansBold text-[16px] "
            >
              English{" "}
              <svg
                className="w-5 h-5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {/* Dropdown menu */}
            <div
              id="dropdownNavbar"
              className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-400"
                aria-labelledby="dropdownLargeButton"
              >
                {langopt.map((e, index) => (
                  <li key={index} className="leading-[25px]">
                    <a
                      href="# "
                      className="block px-4 py-2 font-JosefinSansBold text-[14px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {e.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="flex items-center gap-[10px] leading-[44px]">
            <button
              id="dropdownNavbarLink2"
              data-dropdown-toggle="dropdownNavbar2"
              className="flex items-center justify-between w-full py-2 px-3 font-JosefinSansBold text-[16px] "
            >
              USD{" "}
              <svg
                className="w-5 h-5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {/* Dropdown menu */}
            <div
              id="dropdownNavbar2"
              className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-400"
                aria-labelledby="dropdownLargeButton"
              >
                {money.map((e, index) => (
                  <li key={index} className="leading-[25px]">
                    <a
                      href="# "
                      className="block px-4 py-2 font-JosefinSansBold text-[14px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {e.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="flex items-center gap-[10px] leading-[44px]">
              <p className="font-JosefinSansBold text-[16px]">Login</p>
              <ion-icon
                name="person-outline"
                className="font-JosefinSansBold"
              ></ion-icon>
          </li>
          <li className="flex items-center gap-[10px] leading-[44px]">
            <p className="font-JosefinSansBold text-[16px]">Wishlist</p>
            <ion-icon name="heart-outline" className="mb-[60px] leading-[44px]"></ion-icon>
          </li>

          <li className="flex items-center gap-[10px] leading-[44px]">
            <p className="font-JosefinSansBold text-[16px]"></p>
            <ion-icon name="cart-outline"></ion-icon>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default HeadingBar;
