'use client'
import Image from "next/image";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
// import {  } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from '@/components/molecules/card'
import BuyItem from '@/components/organisms/BuyItem'
import Analytic from '@/components/organisms/Analytic'
import Chat from '@/components/organisms/Chat'
import Balance from '@/components/organisms/Balance'
import CreditCard from '@/components/molecules/CreditCard'
import LastTransaction from "@/components/organisms/LastTransactions";


export default function Home() {
  const [dataCard, setDataCard] = useState({
    name: 'Oktaviardi Pratama P.',
    cardNo: 'XXXXX 48290',
    eod: '08/12'
  });
  const [dataTransactions, setDataTransactions] = useState([
    {
      title: 'Online Store',
      img: '/user1.png',
      date: 1709980353,
      ammount: '3000',
      ammountPre: '-'
    },
    {
      title: 'Pay the Hospital',
      img: '/user2.png',
      date: 1709721153,
      ammount: '2000',
      ammountPre: '+'
    },
    {
      title: 'Tickets',
      img: '/user3.png',
      date: 1709548353,
      ammount: '5000',
      ammountPre: '+'
    },
    {
      title: 'Tickets',
      img: '/user4.png',
      date: 1709289153,
      ammount: '1000',
      ammountPre: '-'
    }
  ]);
  const [dataBuy, setDataBuy] = useState([
    {
      title: 'Online Store',
      img: '/user1.png',
      date: 1709980353,
      ammount: '3000',
      ammountPre: '-'
    },
    {
      title: 'Pay the Hospital',
      img: '/user2.png',
      date: 1709721153,
      ammount: '2000',
      ammountPre: '+'
    },
    {
      title: 'Tickets',
      img: '/user3.png',
      date: 1709548353,
      ammount: '5000',
      ammountPre: '+'
    },
    {
      title: 'Tickets',
      img: '/user4.png',
      date: 1709289153,
      ammount: '1000',
      ammountPre: '-'
    }
  ]);


  return (
    <main className="content p-[30px] h-92 bg-[#F7F5FD]" style={{height: 'auto'}}>
      <div className="w-full flex justify-between align-middle mb-[30px]">
        <div className="left-top">
          <h1 className="d-block font-bold">Hello, Jhon .D</h1>
          <span className="d-block">View and control yourfinance here!</span>
        </div>
        <div className="right-top flex items-center">
          <a href="#" className="flex text-center items-center gap-2 rounded-full bg-white w-[52px] h-[52px] text-gray-700 justify-center">
            <FontAwesomeIcon icon={faMagnifyingGlass} className='w-[18px]'/>
            {/* <span className="text-sm font-medium"> General </span> */}
          </a>
        </div>
      </div>
      <div className="w-full align-middle">
        <div className="lg:flex gap-4 w-full">
          <Card className='lg:flex-grow block'>
            <Balance/>
          </Card>
          <CreditCard className='lg:w-[35%] block  min-h-[260px] overflow-hidden rounded-2xl' prop={{dataCard}}/>
        </div>  
        <div className="w-full">
          <Card className='block'>
            <div className="lg:flex w-full item-center justify-between gap-[15px]">
              <div className=" min-h-[100px] w-full">
                <BuyItem prop={{dataBuy}}></BuyItem>
              </div>
              <div className="separator min-h-full w-{1px} border-r-2 invisible lg:visible w-[1px] m-0 p-0">&nbsp;</div>
              <div className=" min-h-[100px] w-full">
                <Chat/>
              </div>
            </div>
          </Card>
        </div>  
        <div className="lg:flex gap-4 w-full">
          <Card className='lg:flex-grow block'>
            <LastTransaction prop={{dataTransactions}}/> 
          </Card>
          <Card className='lg:w-[28%]'>
            <Analytic/>
          </Card>
        </div>  
      </div>
    </main>
  );
}
