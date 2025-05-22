// import React, { useState } from 'react';

// const Caste= () => {
//   const [formData, setFormData] = useState({
//     applicationNo: '',
//     applicantName: '',
//     fatherName: '',
//     motherName: '',
//     village: '',
//     district: '',
//     state: '',
//     caste: '',
//     issuanceDate: '',
//     validityDate: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Submitted:', formData);
//     alert('Data ready to be recorded in blockchain!');
//   };

//   return (
//     <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
//       <h2 style={{ textAlign: 'center' }}>Caste Certificate Registration</h2>
//       <form onSubmit={handleSubmit}>

//         {[
//           { label: 'Application No.', name: 'applicationNo' },
//           { label: 'Applicant Name', name: 'applicantName' },
//           { label: 'Father Name', name: 'fatherName' },
//           { label: 'Mother Name', name: 'motherName' },
//           { label: 'Village', name: 'village' },
//           { label: 'District', name: 'district' },
//           { label: 'State', name: 'state' },
//           { label: 'Caste', name: 'caste' },
//         ].map(({ label, name }) => (
//           <div key={name} style={{ marginBottom: '15px' }}>
//             <label>{label}</label><br />
//             <input
//               type="text"
//               name={name}
//               value={formData[name]}
//               onChange={handleChange}
//               required
//               style={{ width: '100%', padding: '8px', marginTop: '5px' }}
//             />
//           </div>
//         ))}

//         <div style={{ marginBottom: '15px' }}>
//           <label>Issuance Date</label><br />
//           <input
//             type="date"
//             name="issuanceDate"
//             value={formData.issuanceDate}
//             onChange={handleChange}
//             required
//             style={{ width: '100%', padding: '8px', marginTop: '5px' }}
//           />
//         </div>

//         <div style={{ marginBottom: '15px' }}>
//           <label>Validity Date (Up to)</label><br />
//           <input
//             type="date"
//             name="validityDate"
//             value={formData.validityDate}
//             onChange={handleChange}
//             required
//             style={{ width: '100%', padding: '8px', marginTop: '5px' }}
//           />
//         </div>

//         <button
//           type="submit"
//           style={{
//             width: '100%',
//             padding: '10px',
//             backgroundColor: '#4F46E5',
//             color: 'white',
//             fontWeight: 'bold',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer'
//           }}
//         >
//           Record in Blockchain
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Caste;


import React from 'react';
import Navbar from './Navbar';
import Form from './Form';
const Caste = () => {
  return (

    <div className='flex flex-row w-full h-screen'>
      <div className='w-64 bg-gray-800 text-white'><Navbar/></div>
      <div className='flex-1 overflow-y-auto p-6 bg-gray-100'><Form/></div>
      
     
      </div>
    
  
    
    
  );
};

export default Caste;
