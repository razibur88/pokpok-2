import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import { HiMiniBars2 } from "react-icons/hi2";
import { ImSearch } from "react-icons/im";
import { FaUser } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoCart } from "react-icons/io5";

const Navbar = () => {
  let cateRef = useRef();
  let accRef = useRef();
  let [isCateNav, setisCateNav] = useState(false);
  let [isAcc, setisAcc] = useState(false);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (cateRef.current.contains(e.target)) {
        setisCateNav(!isCateNav);
      } else {
        setisCateNav(false);
      }
      if (accRef.current.contains(e.target)) {
        setisAcc(!isAcc);
      } else {
        setisAcc(false);
      }
    });
  }, [isCateNav]);

  return (
    <section className="bg-[#F5F5F3] py-[25px]">
      <Container>
        <Flex className="items-center">
          <div className="w-1/4 relative">
            <div ref={cateRef} className="flex items-center gap-x-2">
              <HiMiniBars2 />
              <h3>Shop by Category</h3>
            </div>
            {isCateNav && (
              <div className="bg-[#262626] w-[300px] absolute left-0 top-[60px] z-[1]">
                <ul className="py-3">
                  <li className="font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 border-b-[1px] border-[#D8D8D8] hover:pl-6 duration-300 ease-in-out">
                    Accesories
                  </li>
                  <li className="font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 border-b-[1px] border-[#D8D8D8] hover:pl-6 duration-300 ease-in-out">
                    Furniture
                  </li>
                  <li className="font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 border-b-[1px] border-[#D8D8D8] hover:pl-6 duration-300 ease-in-out">
                    Electronics
                  </li>
                  <li className="font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 border-b-[1px] border-[#D8D8D8] hover:pl-6 duration-300 ease-in-out">
                    Clothes
                  </li>
                  <li className="font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 border-b-[1px] border-[#D8D8D8] hover:pl-6 duration-300 ease-in-out">
                    Bags
                  </li>
                  <li className="font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 hover:pl-6 duration-300 ease-in-out">
                    Home appliances
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="w-1/2">
            <div className="relative">
              <input
                type="search"
                className="py-3 pl-2 w-full rounded-sm  outline-none"
                placeholder="Search.."
              />
              <ImSearch className="absolute top-[50%] translate-y-[-50%] right-4" />
            </div>
          </div>
          <div className="w-1/4">
            <div className="flex justify-end gap-x-6 relative">
              <div ref={accRef} className="flex items-center">
                <FaUser />
                <IoMdArrowDropdown />
              </div>
              <IoCart />
              {isAcc && (
                <div className="bg-[#262626] w-[200px] absolute left-[138px] top-[60px] z-[1]">
                  <ul className="py-3">
                    <li className="font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 border-b-[1px] border-[#D8D8D8] hover:pl-6 duration-300 ease-in-out">
                      Account
                    </li>
                    <li className="font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 hover:pl-6 duration-300 ease-in-out">
                      LogOut
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Navbar;
