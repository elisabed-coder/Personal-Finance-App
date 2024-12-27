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
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <header>
      <div className="text-center"></div>
      <div
        className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto bg-white transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="py-4 overflow-y-auto">
          <h1>Finance</h1>
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                <AiFillHome />
                <span className="ms-3">Overview</span>
              </a>
            </li>
            <li>
              <a
                href="/transactions"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                <TbArrowsDownUp />
                <span className="ms-3 whitespace-nowrap">Transactions</span>
              </a>
            </li>
            <li>
              <a
                href="/budget"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                <FcStatistics />
                <span className=" ms-3 whitespace-nowrap">Budgets</span>
              </a>
            </li>
            <li>
              <a
                href="/pots"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                <FaSackDollar />
                <span className="ms-3 whitespace-nowrap">Pots</span>
              </a>
            </li>
            <li>
              <a
                href="/bills"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                <FaMoneyCheck />
                <span className="ms-3 whitespace-nowrap">Recurring Bills</span>
              </a>
            </li>
          </ul>
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="/LogIn"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                <CiLogin />
                <span className="ms-3">LogIn</span>
              </a>
            </li>
            <li>
              <a
                href="/SignUp"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                <CiLogin />
                <span className="ms-3">SignUp</span>
              </a>
            </li>
          </ul>
        </div>
        <button
          className="flex items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute bottom-2.5 right-2.5"
          onClick={() => setOpen(false)}
        >
          <TbArrowBigLeftLinesFilled />
          <span>Minimize Menu</span>
        </button>
      </div>

      <button
        className="flex items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute bottom-2.5 left-2.5"
        onClick={toggle}
      >
        <TbArrowBigRightLinesFilled />
        <span>Maximize Menu</span>
      </button>
    </header>
  );
}

export default HeaderComponent;
