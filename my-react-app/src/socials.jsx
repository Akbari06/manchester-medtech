// function Socials() {
//     return (
//       <div className="w-full bg-[#404444] text-white py-8">
//         <div className="max-w-screen-xl mx-auto px-5 sm:px-10 text-lg sm:text-xl font-bold">
//           <div className="flex flex-col items-start max-w-md mx-auto">
//             <p className="mb-3">
//               Instagram:{" "}
//               <a href="https://www.instagram.com/manchestermedtech/" className="text-blue-500 hover:underline">
//                 manchestermedtech
//               </a>
//             </p>
//             <p className="mb-3">
//               Facebook:{" "}
//               <a href="https://www.facebook.com/manchestermedtech" className="text-blue-500 hover:underline">
//                 manchestermedtech
//               </a>
//             </p>
//             <p className="mb-3">
//               Membership 2024/25:{" "}
//               <a href="https://manchesterstudentsunion.com/shop/product/16844-" className="text-blue-500 hover:underline">
//                 Student Union Shop
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   }
  
//   export default Socials;

function Socials() {
  return (
    <div className="w-screen overflow-x-hidden bg-[#404444] text-white py-8">
      <div className="max-w-screen-xl mx-auto px-5 sm:px-10">
        <div className="flex flex-col items-start max-w-md mx-auto text-lg sm:text-xl font-bold">
          <p className="mb-3">
            Instagram:{" "}
            <a href="https://www.instagram.com/manchestermedtech/" className="text-blue-500 hover:underline">
              manchestermedtech
            </a>
          </p>
          <p className="mb-3">
            Facebook:{" "}
            <a href="https://www.facebook.com/manchestermedtech" className="text-blue-500 hover:underline">
              manchestermedtech
            </a>
          </p>
          <p className="mb-3">
            Membership 2024/25:{" "}
            <a href="https://manchesterstudentsunion.com/shop/product/16844-" className="text-blue-500 hover:underline">
              Student Union Shop
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Socials;