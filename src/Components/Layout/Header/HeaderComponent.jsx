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
import { CiLogin } from "react-icons/ci";

function HeaderComponent() {
  const [open, setOpen] = useState(true);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <header>
      <div
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto bg-white transition-all duration-300 ease-in-out ${
          open ? "w-64" : "w-20"
        }`}
      >
        <div className="py-4 overflow-y-auto">
          <h1 className="text-2xl font-bold">{open ? "Finance" : "F"}</h1>
          <ul className="space-y-2 font-medium mt-6">
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <AiFillHome className="text-lg" />
                {open && <span className="ms-3">Overview</span>}
              </a>
            </li>
            <li>
              <a
                href="/transactions"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <TbArrowsDownUp className="text-lg" />
                {open && (
                  <span className="ms-3 whitespace-nowrap">Transactions</span>
                )}
              </a>
            </li>
            <li>
              <a
                href="/budget"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <FcStatistics className="text-lg" />
                {open && (
                  <span className="ms-3 whitespace-nowrap">Budgets</span>
                )}
              </a>
            </li>
            <li>
              <a
                href="/pots"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <FaSackDollar className="text-lg" />
                {open && <span className="ms-3 whitespace-nowrap">Pots</span>}
              </a>
            </li>
            <li>
              <a
                href="/bills"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <FaMoneyCheck className="text-lg" />
                {open && (
                  <span className="ms-3 whitespace-nowrap">
                    Recurring Bills
                  </span>
                )}
              </a>
            </li>
          </ul>
        </div>
        <button
          className="flex items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute bottom-2.5 right-2.5"
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
    </header>
  );
}

export default HeaderComponent;
