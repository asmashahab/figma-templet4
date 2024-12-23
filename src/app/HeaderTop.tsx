import Link from 'next/link';
import React from 'react';
import { BsTelephoneForward } from 'react-icons/bs';
import { FaRegEnvelope } from 'react-icons/fa';

const HeaderTop = () => {
  return (
    <div>
      <div className="w-full p-4 gap-4 bg-purple-700 text-white hidden md:flex justify-between items-center">
        <div className="text-center flex max-w-7xl mx-auto">
          <FaRegEnvelope className='hover:text-white flex gap-4 font-bold duration-200'/>
          mhhasanul@gmail.com {" "}
          
        
            <Link
            href="/"
            className="hover:text-white flex gap-4 font-bold duration-200 underline"
          >
            <BsTelephoneForward className='hover:text-white flex gap-4 font-bold duration-200' /> (12345)67890
          </Link>
        </div>
        <select
          className="text-white text-[16px] bg-transparent outline-none mr-16"
          name="language"
          id="language"
          >
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>

        <select
              className="text-white text-[16px] bg-transparent outline-none mr-16"
              name="currency"
              id="currency"
            >
              <option value="USD $">USD $</option>
              <option value="EUR €">EUR €</option>
              <option value="PKR Rs">PKR Rs</option>
            </select>
      </div>
    </div>
  );
};

export default HeaderTop;


