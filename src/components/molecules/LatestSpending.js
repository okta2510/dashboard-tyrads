import { faArrowRight, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <h3 className='font-semibold'>Latest Spending</h3>
        <FontAwesomeIcon icon={faEllipsisVertical} className='w-[4px] inline'/>
      </div>
    
    <div>
      {items.map((item, index) => (
        <div key={index} className={`flex items-center w-full justify-between col-1 gap-[15px] py-3 ${index === items.length - 1 ? '' : 'border-gray-200 border-b'}`}>
          <div className='w-[60px]'>
          <img src={item.img} className='w-[80%]' alt="My Image" />
          </div>
          <div>
            <span className='block text-[16px] font-medium'> {item.title}</span>
            <span className='block text-[12px] text-gray-400'> Thu, 07 Mar 2024 23:11:22</span>
          </div>
        </div>
      ))}
    </div>
    <a href="#" className='block w-full text-center text-[14px] text-[#5363EF]  mt-4'>
      View All <FontAwesomeIcon icon={faArrowRight}  className='w-[16px] inline' />
    </a>
    </>
  );
};

export default DashboardHeader;