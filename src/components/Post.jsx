import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";

import { ApiData } from "./ContextApi";
import { Link } from "react-router-dom";

const Post = ({ allPage, activeGrid }) => {
  let { info, loading } = useContext(ApiData);
  console.log(activeGrid);

  return (
    <>
      <div
        className={`${activeGrid == "active" ? "w-[100%]" : "flex flex-wrap"}`}
      >
        {allPage.map((item) => (
          <div className="w-[32%]">
            <div className="">
              <div className="relative group overflow-hidden">
                <Link to={`/shop/${item.id}`}>
                  <img className="w-full" src={item.thumbnail} alt="" />
                </Link>
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
                  {item.title}
                </h3>
                <h5 className="text-[#262626] font-normal text-[16px] font-sans">
                  {item.brand}
                </h5>
              </div>
              <p className="text-[#262626] font-bold text-[16px] font-sans">
                ${item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Post;
