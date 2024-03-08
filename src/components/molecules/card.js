const card = ({children, className}) => {
  return (
    <div className={`card border-2 p-[15px] border-color-[#E1E1E1] rounded-lg mb-[15px] bg-white ${className}`}>
      { children}
    </div>
  );
};

export default card;