import React from 'react'
import { PiChartLineUp,PiChartLineDown} from "react-icons/pi";

const page = () => {
  return (
    <div className='p-2'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        <div className='p-4 bg-white rounded-md shadow-md shadow-gray-100'>
          <div>

          <h1>Messages</h1>
          </div>
        </div>
        <div className='p-4 bg-white rounded-md shadow-md shadow-gray-100'>Projects</div>
        <div className='p-4 bg-white rounded-md shadow-md shadow-gray-100'>Blogs</div>
      </div>
    </div>
  )
}

export default page