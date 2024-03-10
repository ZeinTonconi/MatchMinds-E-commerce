import { createContext, useContext, useState } from 'react'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { Favorites } from './pages/Favorites'
import { Order } from './pages/Order'
// import PropTypes from 'prop-types'; 

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet,
  Route,
} from 'react-router-dom'
import Sidebar from './components/SideBar'
import AuthService from './services/auth.service'
import Product from './pages/Product'
import CartService from './services/cart.service'


const appContext = createContext();
// const cartContext = createContext();


function App({ children }) {

  const [cartService, setCartService] = useState(new CartService([]));
  cartService.setUpdateCart(setCartService)

  const [authService, setAuthService] = useState(new AuthService())

  const app = {authService, setAuthService, 
              cartService, setCartService}

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route index element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/favs' element={<Favorites/>}/>
        <Route path='/orders' element={<Order/>}/>
        <Route path='/product' element={<Product/>}/>
        {/* <Route path='/profile' element={<Profile/>}/> */}
      </Route>
    )
  )
    return (
      <div className='App'>
        <appContext.Provider value={app}>
          {children}
          <RouterProvider router={router}/>
        </appContext.Provider>
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

// App.propTypes = {
//   children: PropTypes.node.isRequired, // Ensure children is of type 'node' and is required
// };

// Call this fucntion in order to use authService (user)
export function useAuth(){
  
  const {authService, setAuthService} = useContext(appContext);
  console.log(authService)

  const updateAuthState = () => setAuthService(prevAuthService => 
    {
      const actualAuthService = new AuthService();
      actualAuthService.user = prevAuthService.user
      actualAuthService.state = prevAuthService.state;
      
      return actualAuthService
    });


  return {authService, updateAuthState}
}

export function useCart(){

  const {cartService, setCartService} = useContext(appContext);
  return {cartService, setCartService}
}