'use client'

import { faArrowRight, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
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
        <h3 className='font-semibold'>Analytic</h3>
        
        <div className="relative inline-block">

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
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;