  const card = ({prop, children, className}) => {
    console.log(prop)
    const dataCard = prop?.dataCard || {};

    return (
      <div className={`text-white background-card card border-2 p-[30px] border-color-[#E1E1E1] rounded-lg mb-[15px] bg-white ${className}`}>
        { children}

        <div className="flex flex-col h-full w-full">
        <div className="flex-grow">
          &nbsp;
        </div>

        {/* Bottom element */}
        <div className="flex items-end w-full">
          <div className="flex justify-between items-end w-full">
            <div className="left">
              <span className="block mb-1">
                {dataCard.cardNo}
              </span>
              <span className="block">
                {dataCard.name}
              </span>
            </div>
            <div className="right">
              {dataCard.eod}
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  };

  export default card;