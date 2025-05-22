function Form(){
  return (
  
     <div className="bg-white rounded-xl shadow-lg">
      <div className="bg-gray-600"><h1 className=" p-3 text-3xl font-bold text-center mb-6 text-gray-800">Caste Certificate</h1>
      </div>      
<form className=" max-full space-y-4 flex flex-col items-center">

        {/* Text Fields */}
        

       <div>
          <label className="block font-semibold text-gray-700">Applicant Name</label>
          <input type="text" className="w-96 border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Father's Name</label>
          <input type="text" className="w-96 border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Mother's Name</label>
          <input type="text" className="w-96 border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Village</label>
          <input type="text" className="w-96 border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">District</label>
          <input type="text" className="w-96 border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">State</label>
          <input type="text" className="w-96 border p-2 rounded" />
        </div>



        <div>
        <label className="block font-semibold text-gray-700 mb-1">Caste</label>
        <select className="w-96 border p-2 rounded">
        <option value="">Select Caste</option>
        <option value="general">General</option>
        <option value="obc">OBC</option>
        <option value="st">ST</option>
        <option value="sc">SC</option>
        </select>
      </div>

    
        {/* Submit Button */}
        <button type="submit" className="w-96 bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700">
          Record on Blockchain
        </button>
      </form>
    </div>
    









  )
}

export default Form
