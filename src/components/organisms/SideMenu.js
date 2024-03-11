'use client'

import { usePathname } from 'next/navigation'
import { faHouse, faUserGroup, faWallet, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faBell, faClock, faComments } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image';


const SideMenu = () => {
  const pathname = usePathname()
  const classActive = 'bg-[#5363EF] text-[#fff] flex text-center items-center gap-2 rounded-full w-[52px] h-[52px] justify-center'
  const classMenu = 'flex text-center items-center gap-2 rounded-full hover:bg-white w-[52px] h-[52px] text-gray-700 justify-center '
  return (
    <aside className="bg-white  py-4 px-6 w-[200px] min-h-screen h-100 fixed">
    <div className="flex items-center justify-between gap-2 text-center ">
      <h1 className="text-center font-bold text-[42px] mb-[30px]">S.</h1>
    </div>
    <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
      <div className="flex flex-col gap-[40px] justify-center items-center">
        <div className="px-4 py-2">
          <a href="#" className="flex text-center items-center gap-2 rounded-full bg-[#F5DEC1] w-[52px] h-[52px] text-gray-700 justify-center">
              <FontAwesomeIcon icon={faComments} className='w-[28px]'/>
              {/* <span className="text-sm font-medium"> General </span> */}
            </a>
        </div>
      <div className="px-4 py-2 ">
        <ul className="space-y-1 p-2 rounded-full bg-[#F7F5FD]">
        <li>
          <a href="/dashboard" className={pathname === '/dashboard' ? classActive : classMenu}>
            <FontAwesomeIcon icon={faHouse} className='w-[18px]'/>
            {/* <span className="text-sm font-medium"> General </span> */}
          </a>
        </li>
        <li>
          <a href="#" className={pathname === '/notification' ? classActive : classMenu}>
            <FontAwesomeIcon icon={faBell} className='w-[18px]'/>
            {/* <span className="text-sm font-medium"> General </span> */}
          </a>
        </li>
        <li>
          <a href="#" className={pathname === '/history' ? classActive : classMenu}>
            <FontAwesomeIcon icon={faClock} className='w-[18px]'/>
            {/* <span className="text-sm font-medium"> General </span> */}
          </a>
        </li>
        <li>
          <a href="#" className={pathname === '/users' ? classActive : classMenu}>
            <FontAwesomeIcon icon={faUserGroup} className='w-[18px]'/>
            {/* <span className="text-sm font-medium"> General </span> */}
          </a>
        </li>
        <li>
          <a href="#" className={pathname === '/wallet' ? classActive : classMenu}>
            <FontAwesomeIcon icon={faWallet} className='w-[18px]'/>
            {/* <span className="text-sm font-medium"> General </span> */}
          </a>
        </li>
        <li>
          <a href="#" className={pathname === '/settings' ? classActive : classMenu}>
            <FontAwesomeIcon icon={faGear} className='w-[18px]'/>
            {/* <span className="text-sm font-medium"> General </span> */}
          </a>
        </li>

        </ul> 
      </div>
      <div className="px-4 py-2 ">
      <div className="px-4 py-2 ">
        <ul className="space-y-1 p-2 rounded-full bg-[#F7F5FD]">
        <li>
          <a href="#" className="flex text-center items-center gap-2 rounded-full w-[52px] h-[52px] justify-center overflow-hidden">
          <Image src='/man.png' className='w-[80% rounded-full' alt="My Image" width={60} height={60} />
          </a>
        </li>
        <li>
          <a href="#" className="flex text-center items-center gap-2 rounded-full bg-gray-100 w-[52px] h-[52px] text-gray-700 justify-center">
            <FontAwesomeIcon icon={faRightFromBracket} className='w-[18px]'/>
            {/* <span className="text-sm font-medium"> General </span> */}
          </a>
        </li>

        </ul> 
      </div>
      </div>
      {/* Add more menu items as needed */}
    </div>
    </div>
    </aside>
  );
};

export default SideMenu;