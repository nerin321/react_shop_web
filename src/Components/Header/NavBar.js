import React from "react";

const money = [
  { value: "USD", label: "USD" },
  { value: "VND", label: "VND" },
];

const NavBar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 px-[200px]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="text-logo not-italic font-JosefinSansBold text-logocolor text-[34px]">
            Hekto
          </span>
        </a>

        <div className="flex md:order-2">
          <input
            type="text"
            id="search-navbar"
            className="block w-full text-[16px] font-LatoRegular p-2 text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button className="focus:outline-none bg-red text-white px-4 flex align-middle items-center hover:opacity-50">
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <li>
                <button
                  id="dropdownNavbarLink3"
                  data-dropdown-toggle="dropdownNavbar3"
                  className="flex items-center justify-between w-full py-2 px-3 font-LatoRegular text-[16px] "
                >
                  Home{" "}
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
                  id="dropdownNavbar3"
                  className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    {money.map((e, index) => (
                      <li key={index}>
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
            </li>
            <li>
              <a
                href="/pages"
                className="font-LatoRegular text-[16px] block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Pages
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="font-LatoRegular text-[16px] block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="font-LatoRegular text-[16px] block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/shop"
                className="font-LatoRegular text-[16px] block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="font-LatoRegular text-[16px] block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
