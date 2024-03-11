import Image from "next/image";
import { faChevronRight, faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import Dropdown from '@/components/molecules/Dropdown';

const BuyItem = ({prop}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedCount, setCheckedCount] = useState(0);
  const handleCheckboxChange = (isChecked) => {
    // Increment or decrement the checked count based on the isChecked value
    setCheckedCount((prevCount) => isChecked ? prevCount + 1 : prevCount - 1);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [dataBuy, setDataBuy] = useState([...prop?.dataBuy]);

  return (
    <>
      <div className="flex items-center  mb-2">
        <h3 className='font-semibold text-[16px]'>List Of time to buy</h3>
      </div>
      <div className="flex items-center gap-[30px] mb-[30px]">
          <div className="">
            <span className="block text-[24px] font-medium leading-1">02:00</span>
            <span className="block text-gray-400 text-[12px] leading-1">Sat, August 12</span>
          </div>
          <div className="h-[28px] w-[28px]">
          <FontAwesomeIcon icon={faChevronRight} className="h-[28px] w-[28px] text-gray-400" />
          </div>
          <div className="">
            <span className="block text-[24px] font-medium leading-1">02:00</span>
            <span className="block text-gray-400 text-[12px] leading-1">Sat, August 12</span>
          </div>
      </div>
      <div  className="flex w-full justify-between mb-4">
        <div className="block text-gray-400">
          {checkedCount}/{dataBuy.length} <span className="text-gray-800 font-semibold">Shopping list</span>
        </div>
        <div className="">
          <span className="gap-1 cursor-not-allowed disabled flex items-center"><FontAwesomeIcon className="h-[16px] w-[16px]" icon={faPlus} /> Add an Item </span>
        </div>
      </div>
      <div className="grid gap-[15px] grid-cols-2 mb-3 items-center">
      {dataBuy.map((item, index) => (
        <div  key={index} className="flex w-full items-center justify-between bg-gray-100 px-3 py-2 rounded-lg">
          <div className="block text-gray-400">
            <input type="checkbox" id={`checkbox-${index}`}
            onChange={(e) => handleCheckboxChange(e.target.checked)}/> <span className="text-gray-800 font-semibold">{item.title}</span>
          </div>
          <Dropdown className="items-center"/>
        </div>
        ))}
      </div>
    </>
  );
};

export default BuyItem;