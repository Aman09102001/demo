function Familyform(){
    return(
 <div className="p-6 bg-white rounded-xl shadow-lg">
      <div className="bg-gray-600"><h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Family Certificate</h1>
</div>      
<form className=" max-w-3xl space-y-4">

        {/* Text Fields */}
        <div>
          <label className="block font-semibold text-gray-700">Family ID</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Member ID</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Family Head Name</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Family Address</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Samagra Registration </label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Inser By User ID</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Username</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Age</label>
          <input type="number" className="w-full border p-2 rounded" />
        </div>

        <div>
  <label className="block font-semibold text-gray-700 mb-2">Gender</label>
  <div className="flex items-center space-x-6">
    <label className="flex items-center space-x-2">
      <input
        type="radio"
        name="gender"
        value="male"
        className="accent-blue-600"
      />
      <span>Male</span>
    </label>
    <label className="flex items-center space-x-2">
      <input
        type="radio"
        name="gender"
        value="female"
        className="accent-pink-500"
      />
      <span>Female</span>
    </label>
  </div>
</div>

<label className="block font-semibold text-gray-700 mb-2">Family Member Details :</label>
 <div>
          <label className="block font-semibold text-gray-700">Member ID</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Name</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Age</label>
          <input type="number" className="w-full border p-2 rounded" />
        </div>

<div>
  <label className="block font-semibold text-gray-700 mb-2">Gender</label>
  <div className="flex items-center space-x-6">
    <label className="flex items-center space-x-2">
      <input
        type="radio"
        name="gender"
        value="male"
        className="accent-blue-600"
      />
      <span>Male</span>
    </label>
    <label className="flex items-center space-x-2">
      <input
        type="radio"
        name="gender"
        value="female"
        className="accent-pink-500"
      />
      <span>Female</span>
    </label>
  </div>
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
          <label className="block font-semibold text-gray-700">Hash of Document</label>
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
export default Familyform