import { faArrowRight, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DashboardHeader = () => {
  return (
    <>
      <div className="flex items-center justify-center mb-2 text-center">
        <h3 className='font-semibold text-[16px]'>Go to Premium</h3>
      </div>
    
      <div>
      <img src="/crown.png" className='w-[100px]' alt="My Image" />
        <h3 className='my-1 mt-2 font-bold text-gray-700'>Need More Feature?</h3>
        <p className='text-gray-400 text-[14px] leading-[18px]'>Update your account to Premium to get more features</p>
      </div>
      <button  className='block w-full text-center text-[14px] text-white bg-[#5363EF] py-3 rounded-lg  mt-4'>
        Get Now
      </button>
    </>
  );
};

export default DashboardHeader;