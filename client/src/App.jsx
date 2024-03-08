import { useState } from 'react'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { Favorites } from './pages/Favorites'
import { Order } from './pages/Order'


import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet,
  Route,
} from 'react-router-dom'
import Sidebar from './components/SideBar'

function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route index element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/favs' element={<Favorites/>}/>
      <Route path='/orders' element={<Order/>}/>
    </Route>
  )
)
  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
const Root = ()=>{
  return(
    <>
    <div>
      <Sidebar/>
    </div>
        <div>
        <Outlet/>
      </div>
      </>
  )
}