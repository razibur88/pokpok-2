import React, { useState } from "react";
import Container from "../components/Container";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import ShopImg from "../assets/product.png";

const Shop = () => {
  let [show, setShow] = useState(false);
  return (
    <section>
      <Container>
        <div className="flex">
          <div className="w-1/5">
            <div className="pr-6 pt-8">
              <div
                className="flex justify-between items-center"
                onClick={() => setShow(!show)}
              >
                <h2 className="text-[#262626] font-bold text-[20px] font-sans">
                  Shop by Category
                </h2>

                {show ? <FaMinus /> : <FaPlus />}
              </div>
              {show && (
                <ul>
                  <li>Categroy</li>
                  <li>Categroy</li>
                  <li>Categroy</li>
                  <li>Categroy</li>
                  <li>Categroy</li>
                </ul>
              )}
            </div>
          </div>
          <div className="w-4/5">
            <div className="pt-8 flex justify-end items-center gap-x-10">
              <div className="">
                <label className="pr-3" htmlFor="">
                  Sort By :
                </label>
                <select
                  className="w-[60px] h-[30px] border-[1px] border-[#262626]"
                  name=""
                  id=""
                >
                  <option value="">one</option>
                  <option value="">one</option>
                  <option value="">one</option>
                  <option value="">one</option>
                </select>
              </div>
              <div className="">
                <label className="pr-3" htmlFor="">
                  Show:
                </label>
                <select
                  className="w-[60px] h-[30px] border-[1px] border-[#262626]"
                  name=""
                  id=""
                >
                  <option value="">one</option>
                  <option value="">one</option>
                  <option value="">one</option>
                  <option value="">one</option>
                </select>
              </div>
            </div>

            <div className="flex justify-between flex-wrap">
              <div className="w-[32%]">
                <div className="">
                  <div className="relative group overflow-hidden">
                    <img className="w-full" src={ShopImg} alt="" />
                    <ul className="bg-white absolute left-0 h-[130px] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-[0px] py-2 text-end pr-4">
                      <li className="py-2">
                        Add to Wish List <FaHeart className="inline-block" />
                      </li>
                      <li className="py-2">
                        Compare <IoGitCompare className="inline-block" />
                      </li>
                      <li className="py-2">
                        Add to Cart <FaCartPlus className="inline-block" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="">
                    <h3 className="text-[#262626] font-bold text-[16px] font-sans">
                      ghdgdg
                    </h3>
                    <h5 className="text-[#262626] font-normal text-[16px] font-sans">
                      hhdhd
                    </h5>
                  </div>
                  <p className="text-[#262626] font-bold text-[16px] font-sans">
                    $00
                  </p>
                </div>
              </div>
              <div className="w-[32%]">
                <div className="">
                  <div className="relative group overflow-hidden">
                    <img className="w-full" src={ShopImg} alt="" />
                    <ul className="bg-white absolute left-0 h-[130px] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-[0px] py-2 text-end pr-4">
                      <li className="py-2">
                        Add to Wish List <FaHeart className="inline-block" />
                      </li>
                      <li className="py-2">
                        Compare <IoGitCompare className="inline-block" />
                      </li>
                      <li className="py-2">
                        Add to Cart <FaCartPlus className="inline-block" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="">
                    <h3 className="text-[#262626] font-bold text-[16px] font-sans">
                      ghdgdg
                    </h3>
                    <h5 className="text-[#262626] font-normal text-[16px] font-sans">
                      hhdhd
                    </h5>
                  </div>
                  <p className="text-[#262626] font-bold text-[16px] font-sans">
                    $00
                  </p>
                </div>
              </div>
              <div className="w-[32%]">
                <div className="">
                  <div className="relative group overflow-hidden">
                    <img className="w-full" src={ShopImg} alt="" />
                    <ul className="bg-white absolute left-0 h-[130px] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-[0px] py-2 text-end pr-4">
                      <li className="py-2">
                        Add to Wish List <FaHeart className="inline-block" />
                      </li>
                      <li className="py-2">
                        Compare <IoGitCompare className="inline-block" />
                      </li>
                      <li className="py-2">
                        Add to Cart <FaCartPlus className="inline-block" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="">
                    <h3 className="text-[#262626] font-bold text-[16px] font-sans">
                      ghdgdg
                    </h3>
                    <h5 className="text-[#262626] font-normal text-[16px] font-sans">
                      hhdhd
                    </h5>
                  </div>
                  <p className="text-[#262626] font-bold text-[16px] font-sans">
                    $00
                  </p>
                </div>
              </div>
              <div className="w-[32%]">
                <div className="">
                  <div className="relative group overflow-hidden">
                    <img className="w-full" src={ShopImg} alt="" />
                    <ul className="bg-white absolute left-0 h-[130px] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-[0px] py-2 text-end pr-4">
                      <li className="py-2">
                        Add to Wish List <FaHeart className="inline-block" />
                      </li>
                      <li className="py-2">
                        Compare <IoGitCompare className="inline-block" />
                      </li>
                      <li className="py-2">
                        Add to Cart <FaCartPlus className="inline-block" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="">
                    <h3 className="text-[#262626] font-bold text-[16px] font-sans">
                      ghdgdg
                    </h3>
                    <h5 className="text-[#262626] font-normal text-[16px] font-sans">
                      hhdhd
                    </h5>
                  </div>
                  <p className="text-[#262626] font-bold text-[16px] font-sans">
                    $00
                  </p>
                </div>
              </div>
              <div className="w-[32%]">
                <div className="">
                  <div className="relative group overflow-hidden">
                    <img className="w-full" src={ShopImg} alt="" />
                    <ul className="bg-white absolute left-0 h-[130px] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-[0px] py-2 text-end pr-4">
                      <li className="py-2">
                        Add to Wish List <FaHeart className="inline-block" />
                      </li>
                      <li className="py-2">
                        Compare <IoGitCompare className="inline-block" />
                      </li>
                      <li className="py-2">
                        Add to Cart <FaCartPlus className="inline-block" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="">
                    <h3 className="text-[#262626] font-bold text-[16px] font-sans">
                      ghdgdg
                    </h3>
                    <h5 className="text-[#262626] font-normal text-[16px] font-sans">
                      hhdhd
                    </h5>
                  </div>
                  <p className="text-[#262626] font-bold text-[16px] font-sans">
                    $00
                  </p>
                </div>
              </div>
              <div className="w-[32%]">
                <div className="">
                  <div className="relative group overflow-hidden">
                    <img className="w-full" src={ShopImg} alt="" />
                    <ul className="bg-white absolute left-0 h-[130px] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-[0px] py-2 text-end pr-4">
                      <li className="py-2">
                        Add to Wish List <FaHeart className="inline-block" />
                      </li>
                      <li className="py-2">
                        Compare <IoGitCompare className="inline-block" />
                      </li>
                      <li className="py-2">
                        Add to Cart <FaCartPlus className="inline-block" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="">
                    <h3 className="text-[#262626] font-bold text-[16px] font-sans">
                      ghdgdg
                    </h3>
                    <h5 className="text-[#262626] font-normal text-[16px] font-sans">
                      hhdhd
                    </h5>
                  </div>
                  <p className="text-[#262626] font-bold text-[16px] font-sans">
                    $00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Shop;
