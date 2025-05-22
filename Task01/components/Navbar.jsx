import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4 flex flex-col justify-between">
      {/* Top Section */}
      <div>
        <h1 className="text-xl font-bold mb-6">Dashboard</h1>
        <ul>
          {/* Main option */}
          <li className="mb-2 font-semibold">Generate Certificate</li>

          {/* Sub-options */}
          <ul className="ml-4">
            <li className="mb-2 hover:text-blue-400">
              AMan
              {/* <Link to="/samagra">Family Certificate</Link> */}
            </li>
            <li className="mb-4 hover:text-blue-400">
              Mandliya
              {/* <Link to="/caste">Caste Certificate</Link> */}
            </li>
          </ul>

          {/* Another main option */}
          <li className="mb-4 mt-4 hover:text-blue-400 cursor-pointer">Verify Certificate</li>
        </ul>
      </div>

      {/* Bottom Section - Logout */}
      <div>
  <button className="hover:text-xl text-white font-semibold py-2 px-2 rounded text-left">
    Logout
  </button>
</div>

    </div>
  );
}

// export default function Navbar() {
//   return (
//     <div className="w-64 h-screen bg-gray-800 text-white p-4">
//       <h1 className="text-xl font-bold mb-6">Dashboard</h1>
//       <ul>
//         <li className="mb-4 cursor-pointer hover:text-blue-400">Generate Certificate</li>
//         <li className="mb-4 cursor-pointer hover:text-blue-400">Verify Certificate</li>
        
//       </ul>
//     </div>
//   );
// }


// import { useState } from 'react';

// export default function Navbar({ onSelect }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="flex flex-col">
//       {/* Hamburger for mobile */}
//       <button
//         className="md:hidden p-4"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         ☰
//       </button>

//       {/* Sidebar */}
//       <div className={`bg-gray-800 text-white w-64 h-screen p-4 space-y-4 
//                       ${isOpen ? 'block' : 'hidden'} md:block`}>
//         <h2 className="text-xl font-bold">Home</h2>
        
//         <button
//           className="w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
//           onClick={() => onSelect('Generate')}
//         >
//           Generate Certificate
//         </button>

//         <button
//           className="w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
//           onClick={() => onSelect('verify')}
//         >
//           Verify Certificate
//         </button>
//       </div>
//     </div>
//   );
// }


// import { useState } from 'react';

// export default function Navbar({ onSelect, onLogout }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isGenerateOpen, setIsGenerateOpen] = useState(false);

//   return (
//     <div className="flex">
//       {/* Mobile Hamburger */}
//       <button
//         className="md:hidden p-4 text-2xl"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         ☰
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`h-screen bg-gray-800 text-white w-64 p-4 flex flex-col justify-between
//                     ${isOpen ? 'block' : 'hidden'} md:flex`}
//       >
//         {/* Top menu items */}
//         <div>
//           <h2 className="text-xl font-bold mb-4">Dashboard</h2>

//           {/* Generate with submenu */}
//           <div
//             className="relative group"
//             onMouseEnter={() => setIsGenerateOpen(true)}
//             onMouseLeave={() => setIsGenerateOpen(false)}
//           >
//             <button className="w-full text-left px-4 py-2 hover:bg-gray-700 rounded">
//               Generate Certificate ▼
//             </button>

//             {isGenerateOpen && (
//               <div className="ml-4 mt-1">
//                 <button
//                   className="w-full text-left px-4 py-2 hover:bg-gray-600 rounded"
//                   onClick={() => onSelect('GenerateFamily')}
//                 >
//                   Family Certificate
//                 </button>
//                 <button
//                   className="w-full text-left px-4 py-2 hover:bg-gray-600 rounded"
//                   onClick={() => onSelect('GenerateCaste')}
//                 >
//                   Caste Certificate
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Verify */}
//           <button
//             className="w-full text-left px-4 py-2 mt-2 hover:bg-gray-700 rounded"
//             onClick={() => onSelect('Verify')}
//           >
//             Verify Certificate
//           </button>
//         </div>

//         {/* Logout Button at bottom */}
//         <div>
//           <button
//             className=" hover:text-xl"
//             onClick={onLogout}
//           >
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
