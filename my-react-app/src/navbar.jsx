// function NavBar() {
//     return (
//       <div className="fixed top-0 left-0 w-full bg-[#1a1a1a] z-[1000]">
//         <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-5 w-full max-w-screen-lg mx-auto p-4">
//           <button className="bg-[#404444] text-white w-[50%] md:w-48 lg:w-64 xl:w-80 py-2.5 rounded cursor-pointer text-xl md:text-2xl font-['Arial'] font-bold text-center whitespace-nowrap overflow-hidden px-4 border-2 border-white">
//             Events
//           </button>
//           <button className="bg-[#404444] text-white w-[50%] md:w-48 lg:w-64 xl:w-80 py-2.5 rounded cursor-pointer text-xl md:text-2xl font-['Arial'] font-bold text-center whitespace-nowrap overflow-hidden px-4 border-2 border-white">
//             Newsletters
//           </button>
//           <button className="bg-[#404444] text-white w-[50%] md:w-48 lg:w-64 xl:w-80 py-2.5 rounded cursor-pointer text-xl md:text-2xl font-['Arial'] font-bold text-center whitespace-nowrap overflow-hidden px-4 border-2 border-white">
//             About us
//           </button>
//         </div>
//       </div>
//     );
// }

// export default NavBar;

function NavBar() {
  return (
    <div className="w-full bg-[#1a1a1a]">
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-5 w-full max-w-screen-lg mx-auto p-4">
        <button className="bg-[#404444] text-white w-[50%] md:w-48 lg:w-64 xl:w-80 py-2.5 rounded cursor-pointer text-xl md:text-2xl font-['Arial'] font-bold text-center whitespace-nowrap overflow-hidden px-4 border-2 border-white">
          Events
        </button>
        <button className="bg-[#404444] text-white w-[50%] md:w-48 lg:w-64 xl:w-80 py-2.5 rounded cursor-pointer text-xl md:text-2xl font-['Arial'] font-bold text-center whitespace-nowrap overflow-hidden px-4 border-2 border-white">
          Newsletters
        </button>
        <button className="bg-[#404444] text-white w-[50%] md:w-48 lg:w-64 xl:w-80 py-2.5 rounded cursor-pointer text-xl md:text-2xl font-['Arial'] font-bold text-center whitespace-nowrap overflow-hidden px-4 border-2 border-white">
          About us
        </button>
      </div>
    </div>
  );
}

export default NavBar;