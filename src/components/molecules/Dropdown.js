

import { faArrowRight, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useRef, useEffect } from 'react';
// import React, { useRef } from 'react';


const DropDown = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const elementRef = useRef(null);

  // Function to handle clicks outside the element
  const handleClickOutside = (event) => {
    if (elementRef.current && !elementRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Attach event listener to the document
    document.addEventListener('click', handleClickOutside);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []); 

  return (
    <>
      <div className="relative inline-block items-center" ref={elementRef}>
        <FontAwesomeIcon icon={faEllipsisVertical} className='w-[4px] inlin p-2 hover:cursor-pointer' onClick={toggleDropdown}/>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-10" >
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">action 1</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">action 2</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">action 3</a>
              </div>
            </div>
          )}
        </div>
    </>
  );
};

export default DropDown;