function NavBar() {
  return (
    <div className="w-full p-4" style={{ height: "64px", zIndex: 1000 }}>
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-5 w-full max-w-screen-lg mx-auto">
        <button className="bg-[#404444] text-white w-full md:w-48 lg:w-64 xl:w-80 py-2.5 rounded cursor-pointer text-xl md:text-2xl font-['Arial'] font-bold text-center whitespace-nowrap overflow-hidden px-4 border-2 border-white">
          Events
        </button>
        <button className="bg-[#404444] text-white w-full md:w-48 lg:w-64 xl:w-80 py-2.5 rounded cursor-pointer text-xl md:text-2xl font-['Arial'] font-bold text-center whitespace-nowrap overflow-hidden px-4 border-2 border-white">
          Newsletters
        </button>
        <button className="bg-[#404444] text-white w-full md:w-48 lg:w-64 xl:w-80 py-2.5 rounded cursor-pointer text-xl md:text-2xl font-['Arial'] font-bold text-center whitespace-nowrap overflow-hidden px-4 border-2 border-white">
          About us
        </button>
      </div>
    </div>
  );
}

export default NavBar;