import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="/">
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl font-bold">Aarushi Ammavajjala</h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li>
                <a
                  href="#home"
                  className="block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100"
                >
                  Education & Skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;