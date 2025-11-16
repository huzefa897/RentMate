import React from 'react'
import { Link } from 'react-router'
const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className={`flex gap-4 p-4 justify-center w-full items-center bg-[#4A70A9]`}>
              
                <li className={`text-decoration-none text-white`}><Link to="/home">Home</Link></li>
                <li className={`text-decoration-none text-white`}><Link to="/receipts">Receipts</Link></li>
                <li className={`text-decoration-none text-white`}>
                  <Link to="/expense">Expenses</Link></li>
                <li className={`text-decoration-none text-white`}><Link to="/AddVehicleCategory">Add Vehicle Category</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar