"use client";
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import SideBar from "../Layout/homepageSidebar";
import SmallButton from "@/components/Buttons/smallButtons";

import Logo from "../logo";
import NavbarLogo from "../navLogo";
import { GoChevronDown } from "react-icons/go";
import homepageSideBarLinks from "@/const/sidebar/homepageSidebar";

const defaultColors = {
  name: "Search for an event",
  background: "primary",
  secondary: "white",
  logo: "white",
  text: "white",
  signUpText: "primary",
};

export default function Navbar({ activeColors }) {
  const router = useRouter();
  const [hoveredElement, setHoveredElement] = useState(null);

  const [showSidebar, setShowSidebar] = useState(false);
  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <div>
        <nav
          className={`${`bg-${defaultColors.background}`} transition-all duration-500 ease-in-out hidden md:block fixed w-full top-0 left-0 z-40 py-4`}
        >
          <div className="px-14 mx-auto max-width">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link className="flex-shrink-0" href="">
                  <NavbarLogo color={defaultColors.logo} />
                </Link>
                <div className="ml-96 max-lg:ml-2">
                  <div className="flex items-baseline ml-10 space-x-4 max-lg:space-x-2">
                    {homepageSideBarLinks.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={`relative transition duration-700 ease-in-out text-white text-sm desktop:text-base  desktop:px-0 py-3 rounded-md font-bold `}
                          onMouseOver={() => setHoveredElement(index)}
                          onMouseLeave={() => setHoveredElement(null)}
                        >
                          <Link
                            href={item.url}
                            className="flex items-center gap-3"
                          >
                            <p>{item.text} </p>
                            {item.extraLinks && <GoChevronDown />}
                          </Link>
                          {hoveredElement === index && (
                            <div className="absolute z-20 top-full py-3 w-fit  h-fit    left-1/2 -translate-x-1/2">
                              <ul className="grid gap-2 py-2 px-5 w-fit bg-white shadow-xl rounded-lg text-primary">
                                {item.extraLinks?.map((link, idx) => {
                                  return (
                                    <Link
                                      key={idx}
                                      onClick={() => setHoveredElement(null)}
                                      href={link.url}
                                      className="w-fit whitespace-nowrap"
                                    >
                                      {link.text}
                                    </Link>
                                  );
                                })}
                              </ul>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <SmallButton
                  name={"Login"}
                  bgColor={"transparent"}
                  borderColor={`${defaultColors.secondary}`}
                  textColor={`${defaultColors.secondary}`}
                  extraClasses={"transition duration-700 ease-in-out"}
                  action={() => router.push("/auth/signin")}
                />

                <SmallButton
                  name={"Sign up"}
                  bgColor={`${defaultColors.secondary}`}
                  borderColor={`${defaultColors.secondary}`}
                  textColor={defaultColors.signUpText}
                  extraClasses={"transition duration-700 ease-in-out"}
                  action={() => router.push("/auth/signup")}
                />
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile View


    {/* Mobile View  */}
        <nav className="relative bg-transparent block md:hidden w-full top-0 left-0 z-40 shadow py-2 ">
          <div className="px-10 max-mobile:px-6 ">
            <div className="flex items-center justify-between h-16">
              <div className=" flex items-center">
                <Logo />
              </div>

              {showSidebar ? (
                <AiOutlineClose
                  role="Menu"
                  onClick={handleSidebarToggle}
                  className={`h-7 w-7 xmd:h-8 xmd:w-8 text-white `}
                />
              ) : (
                <RxHamburgerMenu
                  role="Menu"
                  onClick={handleSidebarToggle}
                  className={`h-7 w-7 xmd:h-8 xmd:w-8 text-white `}
                />
              )}
            </div>
          </div>
        </nav>

        {/* SideBar Menu  */}
        {showSidebar && (
          <div
            role="dialog"
            onClick={handleSidebarToggle}
            className={`${
              showSidebar ? "translate-x-0 " : "translate-x-full"
            } duration-1000 transition-all ease-in-out h-full z-30 block smLaptop:hidden fixed top-20 right-0 w-full  `}
          >
            <SideBar />
          </div>
        )}
      </div>
    </>
  );
}
