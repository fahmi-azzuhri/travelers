import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navbarList = [
    { label: "Home", link: "#" },
    { label: "About Us", link: "#" },
    { label: "Destinations", link: "#" },
    { label: "Travel Deals", link: "#" },
    { label: "Blog", link: "#" },
    { label: "Services", link: "#" },
  ];

  return (
    <div className="app">
      <nav>
        <div className="mx-auto bg-transparent shadow-header">
          <div className="flex mx-auto justify-between w-5/6 ">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-6">
              {/* logo */}
              <div>
                <a
                  href="/"
                  className="flex gap-1 font-bold text-gray-700 items-center "
                >
                  <span className="text-white font-bold">TRAVELERS</span>
                </a>
              </div>
              {/* primary */}
              <div className="hidden lg:flex gap-8">
                {navbarList.map((item, index) => (
                  <a key={index} href={item.link}>
                    <p className="text-white hover:text-gray-900">
                      {item.label}
                    </p>
                  </a>
                ))}
              </div>
              <Button className="align-middle md:hidden lg:inline xl:inline ml-64 bg-blue-500 hover:bg-blue-800">
                Book a travel
              </Button>
            </div>

            {/* secondary */}
            <div className="flex gap-6 items-center">
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <RxHamburgerMenu />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`z-40 w-full bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full "
          }`}
        >
          <div className="px-8 py-6">
            <div className="flex flex-col gap-8 tracking-wider text-center">
              {navbarList.map((item, index) => (
                <a key={index} href={item.link}>
                  {item.label}
                </a>
              ))}
              <button className="bg-blue-500 rounded-xl py-1">
                Book a Travel
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
