import React from 'react'
import Navbar from '../Components/navbar'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='text-center'>Home Dashboard</div>
 <div className="flex justify-center mt-6">
  <table className="table-auto border-collapse border border-gray-300">
    <thead>
      <tr className="bg-gray-100">
        <th className="border border-gray-300 px-4 py-2">S.No.</th>
        <th className="border border-gray-300 px-4 py-2">Receipt Number</th>
        <th className="border border-gray-300 px-4 py-2">Party Name</th>
        <th className="border border-gray-300 px-4 py-2">Company Name</th>
        <th className="border border-gray-300 px-4 py-2">Driver Name</th>
        <th className="border border-gray-300 px-4 py-2">Vehicle Number</th>
        <th className="border border-gray-300 px-4 py-2">Vehicle Category</th>
        <th className="border border-gray-300 px-4 py-2">Receipt Date</th>
        <th className="border border-gray-300 px-4 py-2">Amount</th>
        <th className="border border-gray-300 px-4 py-2">Payment Status</th>
        <th className="border border-gray-300 px-4 py-2">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300 px-4 py-2">1</td>
        <td className="border border-gray-300 px-4 py-2">Malcolm Lockyer</td>
        <td className="border border-gray-300 px-4 py-2">1961</td>
        <td className="border border-gray-300 px-4 py-2">1961</td>
        <td className="border border-gray-300 px-4 py-2">1961</td>
        <td className="border border-gray-300 px-4 py-2">1961</td>
        <td className="border border-gray-300 px-4 py-2">1961</td>
        <td className="border border-gray-300 px-4 py-2">1961</td>
        <td className="border border-gray-300 px-4 py-2">1961</td>
        <td className="border border-gray-300 px-4 py-2">1961</td>
        <td className="border border-gray-300 px-4 py-2">1961</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">2</td>
        <td className="border border-gray-300 px-4 py-2">The Eagles</td>
        <td className="border border-gray-300 px-4 py-2">1972</td>
        <td className="border border-gray-300 px-4 py-2">1961</td>
        <td className="border border-gray-300 px-4 py-2">1961</td>
        <td className="border border-gray-300 px-4 py-2">1961</td>
        <td className="border border-gray-300 px-4 py-2">1961</td>
        <td className="border border-gray-300 px-4 py-2">1961</td>
        <td className="border border-gray-300 px-4 py-2">1961</td>
        <td className="border border-gray-300 px-4 py-2">1961</td>
        <td className="border border-gray-300 px-4 py-2">1961</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">3</td>
        <td className="border border-gray-300 px-4 py-2">Earth, Wind, and Fire</td>
        <td className="border border-gray-300 px-4 py-2">1975</td>
        <td className="border border-gray-300 px-4 py-2">1961</td>
        <td className="border border-gray-300 px-4 py-2">1961</td>
        <td className="border border-gray-300 px-4 py-2">1961</td>
        <td className="border border-gray-300 px-4 py-2">1961</td>
        <td className="border border-gray-300 px-4 py-2">1961</td>
        <td className="border border-gray-300 px-4 py-2">1961</td>
        <td className="border border-gray-300 px-4 py-2">1961</td>
        <td className="border border-gray-300 px-4 py-2">1961</td>
      </tr>
    </tbody>
  </table>
</div>


   </>
  )
}

export default Home