
const DashboardHeader = () => {
  return (
    <>
    <h3 className='font-semibold mb-2'>Expenses and income</h3><div className='flex items-center justify-between w-full'>
      <div className=''>
          <span className='block'>Expense</span>
          <span className='block text-[32px] leading-none'>75%</span>
          <span className='block text-[12px] text-gray-400'>5.663</span>
        </div>
        <div className='text-[18px] leading-none line-center-vs relative h-[30px] flex items-center'>
          <span className='bg-white rounded-full inline-block z-10 p-1'>
            vs
          </span>
        </div>
        <div className=''>
          <span className='block'>Expense</span>
          <span className='block text-[32px] leading-none'>45%</span>
          <span className='block text-[12px] text-gray-400'>2.656</span>
        </div>
      </div>
      <div className='flex gap-3 w-full mt-5'>
        <div className='w-[70%] bg-[#5363EF] h=[20px] rounded-md'>&nbsp;</div>
        <div className='w-[30%] bg-[#F8AA33] h=[20px] rounded-md'>&nbsp;</div>
      </div>
    </>
  );
};

export default DashboardHeader;