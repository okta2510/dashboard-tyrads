import Image from "next/image";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
// import {  } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from '@/components/molecules/card'
import LastTransaction from "@/components/organisms/LastTransactions";

export default function Home() {
  return (
    <main className="content p-[30px] h-92 bg-[#F7F5FD]" style={{height: 'auto'}}>
      <div className="w-full flex justify-between align-middle mb-[30px]">
        <div className="left-top">
          <h1 className="d-block font-bold">Hello, Jhon .D</h1>
          <span className="d-block">View and control yourfinance here!</span>
        </div>
        <div className="right-top flex items-center">
          <a href="#" class="flex text-center items-center gap-2 rounded-full bg-white w-[52px] h-[52px] text-gray-700 justify-center">
            <FontAwesomeIcon icon={faMagnifyingGlass} className='w-[18px]'/>
            {/* <span class="text-sm font-medium"> General </span> */}
          </a>
        </div>
      </div>
      <div className="w-full align-middle">
        <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
          <Card>
          asda  
          </Card>
          <Card>
          asda  
          </Card>
          <Card className='col-span-full'>
          asda  2
          </Card>
          <Card>
            <LastTransaction/> 
          </Card>
          <Card>
          asda  
          </Card>
        </div>  
      </div>
    </main>
  );
}
