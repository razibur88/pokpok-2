import React, {  useState } from "react";
import Container from "../components/Container";
import { FaMinus, FaPlus } from "react-icons/fa";
import Pagination from "../components/Pagination";



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
          <Pagination itemsPerPage={9} />
        
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Shop;
