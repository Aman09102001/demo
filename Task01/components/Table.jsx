// import { useState } from 'react';

// const dummyData = [
//   { id: 1, name: 'John Doe', certificate: 'Family Certificate' },
//   { id: 2, name: 'Jane Smith', certificate: 'Caste Certificate' },
// ];

// export default function Table() {
//   const [search, setSearch] = useState('');
//   const [selectedType, setSelectedType] = useState('All');

//   const filteredData = dummyData.filter(item => {
//     const matchesSearch =
//       item.name.toLowerCase().includes(search.toLowerCase()) ||
//       item.certificate.toLowerCase().includes(search.toLowerCase());

//     const matchesType =
//       selectedType === 'All' || item.certificate === selectedType;

//     return matchesSearch && matchesType;
//   });

//   return (
//     <div className="p-4 w-full">
//       {/* Dropdown */}
//       <div className="mb-4 flex items-center gap-4">
//         <label className="text-sm font-medium text-gray-700">Select Certificate:</label>
//         <select
//           className="border px-3 py-2 rounded"
//           value={selectedType}
//           onChange={(e) => setSelectedType(e.target.value)}
//         >
//           <option value="All">All</option>
//           <option value="Family Certificate">Family Certificate</option>
//           <option value="Caste Certificate">Caste Certificate</option>
//         </select>
//       </div>

//       {/* Search Bar */}
//       <input
//         type="text"
//         placeholder="Search by name or certificate"
//         className="border px-3 py-1 mb-4 w-full rounded"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {/* Table */}
//       <table className="w-full border border-collapse">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border px-4 py-2">Name</th>
//             <th className="border px-4 py-2">Certificate</th>
//             <th className="border px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map(item => (
//             <tr key={item.id} className="text-center">
//               <td className="border px-4 py-2">{item.name}</td>
//               <td className="border px-4 py-2">{item.certificate}</td>
//               <td className="border px-4 py-2 space-x-2">
//                 <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
//                   Verify
//                 </button>
//                 <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
//                   Register
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
///////////////////////////////////////////////////////////////////////////////////

// import { useState } from 'react';

// const dummyData = [
//   { id: 1, name: 'John Doe', certificate: 'Family Certificate' },
//   { id: 2, name: 'Jane Smith', certificate: 'Caste Certificate' },
// ];

// export default function Table() {
//   const [search, setSearch] = useState('');
//   const [selectedType, setSelectedType] = useState('All');

//   const filteredData = dummyData.filter(item => {
//     const matchesSearch =
//       item.name.toLowerCase().includes(search.toLowerCase()) ||
//       item.certificate.toLowerCase().includes(search.toLowerCase());

//     const matchesType =
//       selectedType === 'All' || item.certificate === selectedType;

//     return matchesSearch && matchesType;
//   });

//   return (
//     <div>
//     <div className="p-4 w-full">
//       {/* Dropdown */}
//       <div className="mb-4 flex items-center gap-4">
//         <label className="text-sm font-medium text-gray-700">Select Certificate:</label>
//         <select
//           className="border px-3 py-2 rounded"
//           value={selectedType}
//           onChange={(e) => setSelectedType(e.target.value)}
//         >
//           <option value="All">All</option>
//           <option value="Family Certificate">Family Certificate</option>
//           <option value="Caste Certificate">Caste Certificate</option>
//         </select>
//       </div>

//       {/* Search Bar */}
//       <label className="text-sm font-medium text-gray-700">Search:</label>
//       <input
//         type="text"
//         placeholder="Search by name or certificate"
//         className="border mx-5 px-3 py-1 mb-4 w-72 rounded"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {/* Table */}
//       <table className="w-full border border-collapse">
//         <thead>
//           <tr className="bg-gray-100">
//             {/* <th className="border px-4 py-2">Name</th>
//             <th className="border px-4 py-2">Certificate</th>
//             <th className="border px-4 py-2"></th> */}
//             <th className="border px-4 py-2">Application No.</th>
//             <th className="border px-4 py-2">Applicant Name</th>
//             <th className="border px-4 py-2">Father Name</th>
//             <th className="border px-4 py-2">Mother Name</th>
//             <th className="border px-4 py-2">Address</th>
//             <th className="border px-4 py-2">Certificate No.</th>
//             <th className="border px-4 py-2">Validity Date(Up to)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map(item => (
//             <tr key={item.id} className="text-center">
//               <td className="border px-4 py-2">{item.name}</td>
//               <td className="border px-4 py-2">{item.certificate}</td>
//               <td className="border px-4 py-2 space-x-2">
               
//               </td>
//             </tr>
//           ))}
//         </tbody>
        
//       </table>
//        </div>
//        <div className='flex justify-center'>
//          <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mx-5">
//                   Verify
//                 </button>
//                 <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
//                   Register
//                 </button>
//        </div>
//        </div>
//   );
// }


//////////////////////////////////////////////////////////////////////
//final for responsive
// 


import { useState } from 'react';

const dummyData = [
  { id: 1, name: 'John Doe', certificate: 'Family Certificate' },
  { id: 2, name: 'Jane Smith', certificate: 'Caste Certificate' },
  { id: 3, name: 'Aman', certificate: 'Family Certificate' },
  { id: 4, name: 'Yash', certificate: 'Caste Certificate' },
  {
    id: 5,
    name: 'Deepak',
    certificate: 'Caste Certificate',
    Fathername: 'Rajendra',
    Mothername: 'Rekha',
    Address: 'Mandsaur',
    certificate_num: 1234,
  },
];

export default function Table() {
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState('Family Certificate');

  const filteredData = dummyData.filter((item) => {
    const matchesSearch =
      item.name?.toLowerCase().includes(search.toLowerCase()) ||
      item.certificate?.toLowerCase().includes(search.toLowerCase());

    const matchesType = item.certificate === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="p-4">
      {/* Controls */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        {/* Dropdown */}
        <div className="flex flex-col sm:flex-row gap-2">
          <label className="text-sm font-medium text-gray-700">Select Certificate:</label>
          <select
            className="border px-3 py-2 rounded w-52"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="Family Certificate">Family Certificate</option>
            <option value="Caste Certificate">Caste Certificate</option>
          </select>
        </div>

        {/* Search */}
        <div className="flex flex-col sm:flex-row gap-2">
          <label className="text-sm font-medium text-gray-700">Search:</label>
          <input
            type="text"
            placeholder="Search by name"
            className="border px-3 py-2 rounded w-72"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-collapse min-w-[800px]">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Application No.</th>
              <th className="border px-4 py-2">Applicant Name</th>
              <th className="border px-4 py-2">Father Name</th>
              <th className="border px-4 py-2">Mother Name</th>
              <th className="border px-4 py-2">Address</th>
              <th className="border px-4 py-2">Certificate No.</th>
              <th className="border px-4 py-2">Validity Date (Up to)</th>
              <th className="border px-4 py-2">Verify</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <tr key={item.id} className="text-center">
                  <td className="border px-4 py-2">{item.id}</td>
                  <td className="border px-4 py-2">{item.name || '-'}</td>
                  <td className="border px-4 py-2">{item.Fathername || '-'}</td>
                  <td className="border px-4 py-2">{item.Mothername || '-'}</td>
                  <td className="border px-4 py-2">{item.Address || '-'}</td>
                  <td className="border px-4 py-2">{item.certificate_num || '-'}</td>
                  <td className="border px-4 py-2">--</td>
                  <td className="border px-4 py-2"> <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
Verify            </button></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center text-gray-500 py-4">
                  No matching data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      
    </div>
  );
}



