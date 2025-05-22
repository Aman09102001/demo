function Form(){
  return (
  
     <div className="p-6 bg-white rounded-xl shadow-lg">
      <div className="bg-gray-600"><h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Caste Certificate</h1>
</div>      
<form className=" max-w-3xl space-y-4">

        {/* Text Fields */}
        <div>
          <label className="block font-semibold text-gray-700">Application No.</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Applicant Name</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Father Name</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Mother Name</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Village</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">District</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">State</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Caste</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>

        {/* Date Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-gray-700">Issuance Date</label>
            <input type="date" className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block font-semibold text-gray-700">Validity (Up to)</label>
            <input type="date" className="w-full border p-2 rounded" />
          </div>
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Certificate Number</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700">
          Record on Blockchain
        </button>
      </form>
    </div>
    









  )
}

export default Form
