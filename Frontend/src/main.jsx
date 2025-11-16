import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Receipts from './Pages/Receipts'
import Expense from './Pages/Expense'
import AddVehicleCategory from './Pages/AddVehicleCategory'
import Error from './Pages/Error'
import NewVehicleForm from './Pages/NewVehicleForm'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path:'/Home',
    element:<Home/>,
    errorElement:<Error/>
  },
  {
    path:'/Receipts',
    element:<Receipts/>,
    errorElement:<Error/>
  },
  {
    path:'/Expense',
    element:<Expense/>,
    errorElement:<Error/>
  },
  {
    path:'/AddVehicleCategory',
    element:<AddVehicleCategory/>,
    errorElement:<Error/>
  },
  {
    path:'/NewVehicleForm',
    element:<NewVehicleForm/>,
    errorElement:<Error/>
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router} />
  </StrictMode>,
)
