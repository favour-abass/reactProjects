import { useState } from "react";
import {
  FaHome,
  FaCarrot,
  FaShoppingCart,
  FaUser,
  FaCog,
  FaShoppingBag,
} from "react-icons/fa";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  // const navData = [
  //   {
  //     id: 1,
  //     section: Dashboard,
  //     linkIcon:FaShoppingBag,
  //     navLinks:,
  //   },
  //   {
  //     id: 2,
  //     section: Pages,
  //     linkIcon:FaShoppingCart,
  //     navLinks:,
  //   },
  //   {
  //     id: 3,
  //     section: Apps,
  //     linkIcon:,
  //     navLinks:,
  //   },
  //   {
  //     id: 4,
  //     section: Charts,
  //     linkIcon:,
  //     navLinks:,
  //   },
  // ]

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed overflow-auto top-0 left-0 h-full bg-[#fff]  px-7 py-5 
        ${open ? "translate-x-0" : "-translate-x-full"} w-64`}
      >
        <h2 className="text-xl font-bold mb-10 text-black flex items-center">
          <svg
          className="me-5"
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            role="img"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title></title>
            <path d="M23.9477 10.8913a.1735.1735 0 00-.061-.1178c-2.5032-2.078-4.5288-2.9261-6.9905-2.9261-1.3127 0-2.32.2638-2.9916.7827-.5822.4492-.8896 1.0772-.8896 1.812 0 2.0605 2.5184 3.0003 5.4358 4.0883 1.5023.5604 3.057 1.1404 4.483 1.9319a.1626.1626 0 00.0828.0218.187.187 0 00.0589-.011c.0458-.0174.085-.0523.1025-.1002.545-1.3955.822-2.8673.822-4.374a13.082 13.082 0 00-.0523-1.1076zm-4.81 10.4791c-1.0423-.785-2.5795-1.3824-4.2061-2.0125-1.9362-.7501-4.132-1.6027-5.7803-2.913-1.8665-1.4871-2.7757-3.3623-2.7757-5.7324 0-2.1281.883-3.9466 2.5533-5.2614 1.873-1.474 4.7119-2.2546 8.2071-2.2546.966 0 1.8883.0589 2.743.1766a.1696.1696 0 00.1788-.098.17.17 0 00-.0414-.2007C17.814 1.0924 14.9664.0022 12.001.0022c-3.2052 0-6.2186 1.2472-8.4862 3.5148C1.2494 5.7825 0 8.796 0 11.999c0 3.2051 1.2472 6.2185 3.5149 8.484 2.2654 2.2654 5.2788 3.5148 8.4862 3.5148 2.5903 0 5.0564-.8133 7.1344-2.3505a.1714.1714 0 00.0697-.1374.1735.1735 0 00-.0676-.1395Z"></path>
          </svg>
          Shoppy
        </h2>
        <nav className="space-y-4">
          <div>
            <p className="text-gray-400 uppercase text-md">Dashboard</p>
            <a
              className="ms-3 text-gray-700 text-md my-6 flex items-center"
              href=""
            >
              <svg
                className="me-4"
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>{" "}
              Ecommerce
            </a>
          </div>

          <div>
            <p className="text-gray-400 uppercase text-md">Pages</p>
            <a
              className="ms-3 text-gray-700 text-md my-6 flex items-center"
              href=""
            >
              <svg
                className="me-4"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path>
              </svg>
              Orders
            </a>
            <a
              className="ms-3 text-gray-700 text-md my-6 flex items-center"
              href=""
            >
              <svg
                className="me-4"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 7H24V9H19V7ZM17 12H24V14H17V12ZM20 17H24V19H20V17ZM2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11Z"></path>
              </svg>
              Employees
            </a>
            <a
              className="ms-3 text-gray-700 text-md my-6 flex items-center"
              href=""
            >
              <svg
                className="me-4"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M239.208 343.937c-17.78 10.103-38.342 15.876-60.255 15.876-21.909 0-42.467-5.771-60.246-15.87C71.544 358.331 42.643 406 32 448h293.912c-10.639-42-39.537-89.683-86.704-104.063zM178.953 120.035c-58.479 0-105.886 47.394-105.886 105.858 0 58.464 47.407 105.857 105.886 105.857s105.886-47.394 105.886-105.857c0-58.464-47.408-105.858-105.886-105.858zm0 186.488c-33.671 0-62.445-22.513-73.997-50.523H252.95c-11.554 28.011-40.326 50.523-73.997 50.523z"></path>
                <g>
                  <path d="M322.602 384H480c-10.638-42-39.537-81.691-86.703-96.072-17.781 10.104-38.343 15.873-60.256 15.873-14.823 0-29.024-2.654-42.168-7.49-7.445 12.47-16.927 25.592-27.974 34.906C289.245 341.354 309.146 364 322.602 384zM306.545 200h100.493c-11.554 28-40.327 50.293-73.997 50.293-8.875 0-17.404-1.692-25.375-4.51a128.411 128.411 0 0 1-6.52 25.118c10.066 3.174 20.779 4.862 31.895 4.862 58.479 0 105.886-47.41 105.886-105.872 0-58.465-47.407-105.866-105.886-105.866-37.49 0-70.427 19.703-89.243 49.09C275.607 131.383 298.961 163 306.545 200z"></path>
                </g>
              </svg>
              Customers
            </a>
          </div>

          <div>
            <p className="text-gray-400 uppercase text-md">Apps</p>
            <a
              className="ms-3 text-gray-700 text-md my-6 flex items-center"
              href=""
            >
              <svg
                className="me-4"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path>
              </svg>
              Calender
            </a>
            <a
              className="ms-3 text-gray-700 text-md my-6 flex items-center"
              href=""
            >
              <svg
                className="me-4"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.5 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h11zm-11-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11z"></path>
                <path d="M6.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm-4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm8 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3z"></path>
              </svg>
              Kanban
            </a>
            <a
              className="ms-3 text-gray-700 text-md my-6 flex items-center"
              href=""
            >
              <svg
                className="me-4"
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
              Editor
            </a>
            <a
              className="ms-3 text-gray-700 text-md my-6 flex items-center"
              href=""
            >
              <svg
                className="me-4"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 13.998c-.092.065-2 2.083-2 3.5 0 1.494.949 2.448 2 2.5.906.044 2-.891 2-2.5 0-1.5-1.908-3.435-2-3.5zm-16.586-1c0 .534.208 1.036.586 1.414l5.586 5.586c.378.378.88.586 1.414.586s1.036-.208 1.414-.586l7-7-.707-.707L11 4.584 8.707 2.291 7.293 3.705l2.293 2.293L4 11.584c-.378.378-.586.88-.586 1.414zM11 7.412l5.586 5.586L11 18.584h.001l-.001 1v-1l-5.586-5.586L11 7.412z"></path>
              </svg>
              Color-Picker
            </a>
          </div>

          <div>
            <p className="text-gray-400 uppercase text-lg">Charts</p>
            <a
              className="ms-3.5 text-gray-700 text-lg my-5 flex items-center"
              href=""
            >
              <svg
                className="me-4"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M904 747H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM165.7 621.8l39.7 39.5c3.1 3.1 8.2 3.1 11.3 0l234.7-233.9 97.6 97.3a32.11 32.11 0 0 0 45.2 0l264.2-263.2c3.1-3.1 3.1-8.2 0-11.3l-39.7-39.6a8.03 8.03 0 0 0-11.3 0l-235.7 235-97.7-97.3a32.11 32.11 0 0 0-45.2 0L165.7 610.5a7.94 7.94 0 0 0 0 11.3z"></path>
              </svg>
              Line
            </a>
            <a
              className="ms-3.5 text-gray-700 text-lg my-5 flex items-center"
              href=""
            >
              <svg
                className="me-4"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-616-64h536c4.4 0 8-3.6 8-8V284c0-7.2-8.7-10.7-13.7-5.7L592 488.6l-125.4-124a8.03 8.03 0 0 0-11.3 0l-189 189.6a7.87 7.87 0 0 0-2.3 5.6V720c0 4.4 3.6 8 8 8z"></path>
              </svg>
              Area
            </a>
            <a
              className="ms-3.5 text-gray-700 text-lg my-5 flex items-center"
              href=""
            >
              <svg
                className="me-4"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-600-80h56c4.4 0 8-3.6 8-8V560c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V384c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v320c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V462c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v242c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v400c0 4.4 3.6 8 8 8z"></path>
              </svg>
              Bar
            </a>
            <a
              className="ms-3.5 text-gray-700 text-lg my-5 flex items-center"
              href=""
            >
              <svg
                className="me-4"
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
              </svg>
              Pie
            </a>
            <a
              className="ms-3.5 text-gray-700 text-lg my-5 flex items-center"
              href=""
            >
              <svg
                className="me-4"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.00488 5.00293H11.0049V14.0029H8.00488V17.0029H6.00488V14.0029H3.00488V5.00293H6.00488V2.00293H8.00488V5.00293ZM5.00488 7.00293V12.0029H9.00488V7.00293H5.00488ZM18.0049 10.0029H21.0049V19.0029H18.0049V22.0029H16.0049V19.0029H13.0049V10.0029H16.0049V7.00293H18.0049V10.0029ZM15.0049 12.0029V17.0029H19.0049V12.0029H15.0049Z"></path>
              </svg>
              Financial
            </a>
            <a
              className="ms-3.5 text-gray-700 text-lg my-5 flex items-center"
              href=""
            >
              <svg
                className="me-4"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z"></path>
              </svg>
              Color-Mapping
            </a>
            <a
              className="ms-3.5 text-gray-700 text-lg my-5 flex items-center"
              href=""
            >
              <svg
                className="me-4"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 71.3L14.72 416H497.3zm0 31.4l21 30-21 30-21-30zm-32 45.7l21 30-21 30-21-30zm64 0l21 30-21 30-21-30zm-86.7 32.4l-9.3 13.4 21 30-21 29.9-21-30zM320 194.1l21 30-21 30-21-30zm-64 .1l21 29.9-21 30-21-30zm-88.6 35l-7.4 10.7 21 30-21 29.9-21-30zM352 239.8l21 30-21 30-21-30zm-128 .1l21 30-21 29.9-21-29.9zm64 0l21 30-21 29.9-21-29.9zm-154.3 37.6l-5.7 8.1 21 30-21 29.9-21-30zm245.9 1.8l25.4 36.2-21 30-21-29.9 21-30zM192 285.6l21 30-21 29.9-21-29.9zm64 0l21 30-21 29.9-21-29.9zm64 0l21 30-21 29.9-21-29.9zM98.51 327.7l-2.52 3.6 21.01 30L91.29 398h-42zm315.19.4l49 69.9h-42L395 361.3l21-30zM160 331.3l21 30-21 29.9-21-29.9zm64 0l21 30-21 29.9-21-29.9zm64 0l21 30-21 29.9-21-29.9zm64 0l21 30-21 29.9-21-29.9zm-224 45.8l14.6 20.9h-29.2zm64 0l14.6 20.9h-29.2zm64 0l14.6 20.9h-29.2zm64 0l14.6 20.9h-29.2zm64 0l14.6 20.9h-29.2z"></path>
              </svg>
              Pyramid
            </a>
            <a
              className="ms-3.5 text-gray-700 text-lg my-5 flex items-center"
              href=""
            >
              <svg
                className="me-4"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-600-80h56c4.4 0 8-3.6 8-8V560c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V384c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v320c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V462c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v242c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v400c0 4.4 3.6 8 8 8z"></path>
              </svg>
              Stacked
            </a>
          </div>
        </nav>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="m-4 ms-72 p-2 primary-text"
      >
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );
}
