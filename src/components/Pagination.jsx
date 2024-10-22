import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Product from '../assets/product.png'
import { IoGitCompare } from 'react-icons/io5';
import { FaCartPlus, FaHeart } from 'react-icons/fa';



import Data from '../data';


function Items({ currentItems }) {
  return (
    <div className='flex flex-wrap gap-x-[2px]'>
      {currentItems &&
        currentItems.map((item) => (

          <div className='w-[380px] mx-3'>
          <div className="">
              <div className="">
                  <div className="relative group overflow-hidden">
                      <img className="w-full" src={item.image} alt="" />
                      <ul className='bg-white absolute left-0 h-[130px] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-[0px] py-2 text-end pr-4'>
                          <li className='py-2'>Add to Wish List <FaHeart className='inline-block'/></li>
                          <li className='py-2'>Compare <IoGitCompare className='inline-block'/></li>
                          <li className='py-2'>Add to Cart <FaCartPlus className='inline-block'/></li>
                      </ul>
              
                  </div>
                  

              </div>
              <div className="flex justify-between">
                  <div className="">
                      <h3 className='text-[#262626] font-bold text-[16px] font-sans'>{item.title}</h3>
                      <h5 className='text-[#262626] font-normal text-[16px] font-sans'>sdfsdfsd</h5>
                  </div>
                  <p className='text-[#262626] font-bold text-[16px] font-sans'>$12</p>
              </div>
          </div>
      </div>
        ))}
    </div>
  );
}

function Pagination({ itemsPerPage }) {
  
  const [itemOffset, setItemOffset] = useState(0);

  
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = Data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(Data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % Data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className='pt-10'>
      <Items currentItems={currentItems} />
      <div className='pt-[100px] flex justify-between'>
      <ReactPaginate
        breakLabel="....."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        containerClassName="flex gap-x-4"
        pageClassName=""
        pageLinkClassName="border border-black p-5 text-back"
        renderOnZeroPageCount={null}
      />
      <h1>Products from {itemOffset+1} to {endOffset<Data.length?endOffset:Data.length} of {Data.length}</h1>
      </div>
    </div>
  );
}

export default Pagination