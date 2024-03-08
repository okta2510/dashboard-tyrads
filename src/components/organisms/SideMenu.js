import { faHouse, faUserGroup, faWallet, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faBell, faClock, faComments } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SideMenu = () => {
  return (
    <aside className="bg-white  py-4 px-6 w-[200px] min-h-screen h-100 fixed">
    <div classname="flex items-center justify-between gap-2 text-center ">
      <h1 className="text-center font-bold text-[42px] mb-[30px]">S.</h1>
    </div>
    <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
      <div className="flex flex-col gap-[40px] justify-center items-center">
        <div className="px-4 py-2">
          <a href="#" class="flex text-center items-center gap-2 rounded-full bg-[#F5DEC1] w-[52px] h-[52px] text-gray-700 justify-center">
              <FontAwesomeIcon icon={faComments} className='w-[28px]'/>
              {/* <span class="text-sm font-medium"> General </span> */}
            </a>
        </div>
      <div className="px-4 py-2 ">
        <ul class="space-y-1 p-2 rounded-full bg-[#F7F5FD]">
        <li cla>
          <a href="#" class="flex text-center items-center gap-2 rounded-full bg-[#5363EF] w-[52px] h-[52px] text-[#fff] justify-center">
            <FontAwesomeIcon icon={faHouse} className='w-[18px]'/>
            {/* <span class="text-sm font-medium"> General </span> */}
          </a>
        </li>
        <li cla>
          <a href="#" class="flex text-center items-center gap-2 rounded-full bg-gray-100 w-[52px] h-[52px] text-gray-700 justify-center">
            <FontAwesomeIcon icon={faBell} className='w-[18px]'/>
            {/* <span class="text-sm font-medium"> General </span> */}
          </a>
        </li>
        <li cla>
          <a href="#" class="flex text-center items-center gap-2 rounded-full bg-gray-100 w-[52px] h-[52px] text-gray-700 justify-center">
            <FontAwesomeIcon icon={faClock} className='w-[18px]'/>
            {/* <span class="text-sm font-medium"> General </span> */}
          </a>
        </li>
        <li cla>
          <a href="#" class="flex text-center items-center gap-2 rounded-full bg-gray-100 w-[52px] h-[52px] text-gray-700 justify-center">
            <FontAwesomeIcon icon={faUserGroup} className='w-[18px]'/>
            {/* <span class="text-sm font-medium"> General </span> */}
          </a>
        </li>
        <li cla>
          <a href="#" class="flex text-center items-center gap-2 rounded-full bg-gray-100 w-[52px] h-[52px] text-gray-700 justify-center">
            <FontAwesomeIcon icon={faWallet} className='w-[18px]'/>
            {/* <span class="text-sm font-medium"> General </span> */}
          </a>
        </li>
        <li cla>
          <a href="#" class="flex text-center items-center gap-2 rounded-full bg-gray-100 w-[52px] h-[52px] text-gray-700 justify-center">
            <FontAwesomeIcon icon={faGear} className='w-[18px]'/>
            {/* <span class="text-sm font-medium"> General </span> */}
          </a>
        </li>
        {/* <li>
          <details class="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              class="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <div class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>

                <span class="text-sm font-medium"> Teams </span>
              </div>

              <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <ul class="mt-2 space-y-1 px-4">
              <li>
                <a
                  href="#"
                  class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Banned Users
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Calendar
                </a>
              </li>
            </ul>
          </details>
        </li> */}

        </ul> 
      </div>
      <div className="px-4 py-2 ">
      <div className="px-4 py-2 ">
        <ul class="space-y-1 p-2 rounded-full bg-[#F7F5FD]">
        <li cla>
          <a href="#" class="flex text-center items-center gap-2 rounded-full w-[52px] h-[52px] justify-center overflow-hidden">
          <img src="/man.png" alt="My Image" />
          </a>
        </li>
        <li cla>
          <a href="#" class="flex text-center items-center gap-2 rounded-full bg-gray-100 w-[52px] h-[52px] text-gray-700 justify-center">
            <FontAwesomeIcon icon={faRightFromBracket} className='w-[18px]'/>
            {/* <span class="text-sm font-medium"> General </span> */}
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