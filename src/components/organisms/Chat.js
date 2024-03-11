'use client'

import { faPaperclip, faFaceSmile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import Image from 'next/image';


const items = [
  {
    title: 'Online Store',
    img: '/store.png'
  },
  {
    title: 'Pay the Hospital',
    img: '/hospital.png'
  },
  {
    title: 'Tickets',
    img: '/ticket.png'
  },
];


const DashboardHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <h3 className='font-semibold'>Eshter Howard</h3>
        
        {/* <div className="relative inline-block">

          <FontAwesomeIcon icon={faEllipsisVertical} className='w-[4px] inline' onClick={toggleDropdown}/>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5" 
              onMouseLeave={toggleDropdown}>
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sort By Name</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sort By Date</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sort By Category</a>
                </div>
              </div>
            )}
        </div> */}
      </div>
      <div className='conversation-wrap'>
        <div className='overflow-y-scroll min-h-3 max-h-[300px]'>
          
          <div className='content-left flex items-center w-full justify-end  col-span- gap-4 py-[10px]'>
            <span className='block text-[16px] font-medium p-[10px] bg-blue-600 text-white rounded-lg rounded-br-none'>Are you ready?</span>
            <div className='w-[60px]'>
              <Image src='/man.png' className='w-[80% rounded-full' alt="My Image" width={60} height={60} />
            </div>
          </div>

          <div className='content-left flex items-center w-full justify-start col-span- gap-4 py-[10px]'>
            <div className='w-[60px]'>
              <Image src='/man.png' className='w-[80% rounded-full' alt="My Image" width={60} height={60} />
            </div>
            <span className='block text-[16px] font-medium p-[10px] bg-gray-100 rounded-lg rounded-bl-none'> I have Prepared everything</span>
          </div>

        </div>
        <div className='inputForm bg-gray-100 w-full min-h-[50px] rounded-md p-[15px]'>
          <div>
            <textarea row="3" placeholder='Type Your Message' className='bg-transparent shadow-none w-full outline-none resize-none'></textarea>
          </div>
          <div className='flex w-full items-center justify-between'>
            <div className='flex items-center'>
              <FontAwesomeIcon className='text-gray-700 p-2 text-[18px] hover:cursor-pointer' icon={faFaceSmile} />
              <FontAwesomeIcon className='text-gray-700 p-2 text-[18px] hover:cursor-pointer' icon={faPaperclip} />
            </div>
            <div>
              <button className='block w-full text-center text-[14px] text-white bg-[#5363EF] py-3 rounded-lg px-[15px]'>Send Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;