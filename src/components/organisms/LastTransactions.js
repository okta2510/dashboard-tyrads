'use client'

import { formatEpochDateTime } from '@/utils/StringHelper';
import { useState } from 'react';
import Image from 'next/image';
import { faArrowRight, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Dropdown from '@/components/molecules/Dropdown';

// const items = [
//   {
//     title: 'Online Store',
//     img: '/user1.png',
//     date: 1709980353,
//     ammount: '3000',
//     ammountPre: '-'
//   },
//   {
//     title: 'Pay the Hospital',
//     img: '/user2.png',
//     date: 1709721153,
//     ammount: '2000',
//     ammountPre: '+'
//   },
//   {
//     title: 'Tickets',
//     img: '/user3.png',
//     date: 1709548353,
//     ammount: '5000',
//     ammountPre: '+'
//   },
//   {
//     title: 'Tickets',
//     img: '/user4.png',
//     date: 1709289153,
//     ammount: '1000',
//     ammountPre: '-'
//   }
// ];


const LastTransaction = ({prop}) => {
  const [trasnsactions, setTrasnsactions] = useState([...prop?.dataTransactions]);
  const [sort, setSort] = useState('dsc');
  const [showAll, setShowAll] = useState(false);
  
  
  const sortByTimestamp = (a, b) => {
    if(sort === 'asc')  return b.date - a.date;
    return a.date - b.date;
  }
  
  const sortList = async (val) => {
    console.log(val, sort)
    if(val === sort) return
    await setSort(val);
    const sortedData = trasnsactions.slice().sort(sortByTimestamp);
    setTrasnsactions(sortedData);
  }

  let renderedStranscation = showAll ? trasnsactions : trasnsactions.slice(0,3)

  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <h3 className='font-semibold'>Last Transaction</h3>

        <div className='ordering flex gap-4 text-[14px]'>
          <span className='hover:underline hover:cursor-pointer' onClick={() => sortList('dsc')}>Newest</span>
          <span className='hover:underline hover:cursor-pointer' onClick={() => sortList('asc')}>Oldest</span>
        </div>
      </div>
    
    <div>
      {renderedStranscation.map((item, index) => (
        <div key={index} className={`flex items-center w-full justify-between col-1 gap-[15px] py-3 hover:bg-slate-50 px-3 ${index === renderedStranscation.length - 1 ? '' : 'border-gray-200 border-b'}`}>
          <div className='content-left flex items-center w-full justify-start col-span- gap-4'>
            <div className='w-[60px]'>
              <Image src={item.img} className='w-[80% rounded-full' alt="My Image" width={60} height={60} />
            </div>
            <div className='w-full'>
              <span className='block text-[16px] font-medium'> {item.title}</span>
              <span className='block text-[12px] text-gray-400'> {formatEpochDateTime(item.date)}</span>
            </div>
          </div>
          <div className='justify-end flex items-center w-[35%]'>
            <Dropdown/>
          </div>
        </div>
      ))}
    </div>
    {!showAll && <a href="#" className='block w-full text-center text-[14px] text-[#5363EF]  mt-4' onClick={() => setShowAll(true)}>
      View All <FontAwesomeIcon icon={faArrowRight}  className='w-[16px] inline' />
    </a>}
    </>
  );
};

export default LastTransaction;