import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { TbArrowsDownUp } from "react-icons/tb";
import { FcStatistics } from "react-icons/fc";
import { FaSackDollar } from "react-icons/fa6";
import { FaMoneyCheck } from "react-icons/fa";
import {
  TbArrowBigLeftLinesFilled,
  TbArrowBigRightLinesFilled,
} from "react-icons/tb";

const HeaderComponent = ({ open, setOpen }) => {
  const toggle = () => {
    setOpen(!open);
  };

  const navigationItems = [
    {
      href: "/home",
      icon: <AiFillHome className="text-lg" />,
      label: "Overview",
    },
    {
      href: "/home/transactions",
      icon: <TbArrowsDownUp className="text-lg" />,
      label: "Transactions",
    },
    {
      href: "/home/budget",
      icon: <FcStatistics className="text-lg" />,
      label: "Budgets",
    },
    {
      href: "/home/pots",
      icon: <FaSackDollar className="text-lg" />,
      label: "Pots",
    },
    {
      href: "/home/bills",
      icon: <FaMoneyCheck className="text-lg" />,
      label: "Bills",
    },
  ];

  return (
    <>
      <div
        className={`hidden lg:block fixed top-0 left-0 bottom-0 z-40 bg-black transition-all duration-300 ease-in-out text-white ${
          open ? "w-56" : "w-20"
        }`}
      >
        <div className="p-4">
          <h1 className="text-2xl font-bold">{open ? "Finance" : "F"}</h1>
          <ul className="space-y-2 font-medium mt-6">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="flex items-center p-2 rounded-lg hover:bg-gray-100 text-white"
                >
                  {item.icon}
                  {open && (
                    <span className="ms-3 whitespace-nowrap">{item.label}</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="flex items-center absolute bottom-8 right-2.5"
          onClick={toggle}
        >
          {open ? (
            <>
              <TbArrowBigLeftLinesFilled />
              <span className="ms-2">Minimize Menu</span>
            </>
          ) : (
            <TbArrowBigRightLinesFilled />
          )}
        </button>
      </div>

      {/* { Mobile  Navigation } */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-gray-200 z-40 rounded-md">
        <div className="grid grid-cols-5 h-16">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center text-white  hover:bg-gray-100"
            >
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
