import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { HiMiniBars2 } from "react-icons/hi2";
import { ImSearch } from "react-icons/im";
import { FaUser } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoCart } from "react-icons/io5";



const Navbar = () => {
  return (
    <section className='bg-[#F5F5F3] py-[25px]'>
    <Container>
        <Flex className="items-center">
            <div className="w-1/4">
                <div className="flex items-center gap-x-2">
                    <HiMiniBars2/>
                    <h3>Shop by Category</h3>
                </div>
            </div>
            <div className="w-1/2">
                <div className="relative">
                <input type="search" className='py-3 pl-2 w-full rounded-sm  outline-none' placeholder='Search..' />
                <ImSearch className='absolute top-[50%] translate-y-[-50%] right-4'/>
                </div>
            </div>
            <div className="w-1/4">
                <div className="flex justify-end gap-x-6">
                    <div className="flex items-center">
                        <FaUser/>
                        <IoMdArrowDropdown/>
                    </div>
                    <IoCart/>
                </div>
            </div>
        </Flex>
    </Container>
    </section>
  )
}

export default Navbar