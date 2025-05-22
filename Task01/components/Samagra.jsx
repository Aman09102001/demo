import Familyform from "./Familyform"
import Navbar from "./Navbar"
function Samagra(){
    return(
  <div className='flex flex-row w-full h-screen'>
      <div className='w-64 bg-gray-800 text-white'><Navbar/></div>
      <div className='flex-1 overflow-y-auto p-6 bg-gray-100'><Familyform/></div>
      </div>
    )
}
export default Samagra