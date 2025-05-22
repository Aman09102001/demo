// import blockchain2 from '../src/assets/blockchain2.jpg';
// import blockchain6 from '../src/assets/blockchain6.jpg';
// import blockchain3 from '../src/assets/blockchain3.png';
// import blockchain4 from '../src/assets/blockchain4.png';
import blockchain5 from '../src/assets/blockchain5.png';
function Login() {
  return (
    <div className="font-sans">
        <div className="w-full h-16 text-center bg-gray-300 text-xl"> <h1 className='pt-4'>प्रमाणिक दस्तावेज</h1></div>
        <div className=" min-h-screen flex">
      {/* Left Logo Section */}
      <div className="w-2/3 bg-blue flex justify-center ">
      <img style={{ height: "650px" }} src={blockchain5} alt="This is Blockchain Image" />
      </div>
     {/* Right Login Form */}
      <div className="w-1/3 bg-blue-500 text-white flex flex-col justify-center items-center relative px-10">
        <h2 className="text-3xl font-bold mb-6">Login</h2>

        <input
          type="text"
          placeholder="User Name"
          className="w-full max-w-md p-2 mb-4 rounded text-black bg-gray-100"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full max-w-md p-2 mb-4 rounded text-black bg-gray-100"
        />

        

        <button className="bg-yellow-600 hover:bg-gray-300 px-10 py-2 rounded text-white mt-4">
          Login
        </button>

       

        
        <p className="absolute bottom-2 text-xs text-gray-300 text-center w-full px-4">
          BLOCKCHAIN is a secure digital initiative for decentralized systems and data
            integrity.
        </p>
      </div>
      </div>
    </div>
  )
}

export default Login
