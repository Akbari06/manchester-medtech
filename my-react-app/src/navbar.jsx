function NavBar() {
    return (
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-5 w-full max-w-screen-lg mx-auto p-4 relative z-[1000] overflow-hidden">
        <button className="bg-[#404444] text-white w-full md:w-auto lg:w-auto xl:w-auto py-2.5 rounded cursor-pointer text-xl md:text-2xl font-['Arial'] text-center whitespace-nowrap overflow-hidden px-4">
          Events
        </button>
        <button className="bg-[#404444] text-white w-full md:w-auto lg:w-auto xl:w-auto py-2.5 rounded cursor-pointer text-xl md:text-2xl font-['Arial'] text-center whitespace-nowrap overflow-hidden px-4">
          Newsletters
        </button>
      </div>
    );
  }
  
  export default NavBar;