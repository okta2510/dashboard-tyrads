import Image from "next/image";
import { faMagnifyingGlass, faUserGroup, faWallet, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import {  faClock, faComments } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <main className="content p-[30px] h-92 bg-[#F7F5FD]" style={{height: 'auto'}}>
      <div className="w-full flex justify-between align-middle">
        <div className="left-top">
          <h1 className="d-block">Hello, Jhon .D</h1>
          <span className="d-block">View and control yourfinance here!</span>
        </div>
        <div className="right-top flex items-center">
          <a href="#" class="flex text-center items-center gap-2 rounded-full bg-white w-[52px] h-[52px] text-gray-700 justify-center">
            <FontAwesomeIcon icon={faMagnifyingGlass} className='w-[18px]'/>
            {/* <span class="text-sm font-medium"> General </span> */}
          </a>
        </div>
      </div>
    </main>
  );
}
