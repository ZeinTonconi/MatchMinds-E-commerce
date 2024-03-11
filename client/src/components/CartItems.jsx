
import {AiFillDelete} from 'react-icons/ai'
import {BsArrowLeft} from 'react-icons/bs'
import { NavLink } from "react-router-dom";
import { useAuth, useCart } from '../App';
import { useState } from 'react';

import { ImCancelCircle } from "react-icons/im";
import { FaRegCheckCircle } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";

const CartItems = () => {

    const {cartService} = useCart()
    let cartProducts = cartService.getCartProducts();

    const [quantities, setQuantities] = useState(
        cartProducts.map((product) => product.inCart)
      );
    
      const handleChange = (index, newQuantity) => {
        const newQuantities = [...quantities];
        newQuantities[index] = newQuantity;
        setQuantities(newQuantities);

        const updatedProducts = cartProducts.map((product, i) => {
          if (i === index) {
            return { ...product, inCart: newQuantity };
          }
          return product;
        });
    
        cartService.updateProduct(updatedProducts[index]);
      };

      const [showModal, setShowModal] = useState(false);

      const closeModal = () => {
          setShowModal(false);
          setShowLoginFirst(false)
      };

      const authService = useAuth();
      const user = authService.authService.getUser()

      const [showLoginFirst, setShowLoginFirst] = useState(false);
  
      const openModal = async () => {
        

        if(!user)
            setShowLoginFirst(true)
        else{
            cartService.buyCart(user)
            setShowModal(true);
        }
      };

    return(
        <div>
            <div className='w-11/12 m-auto py-10'>
                <h1 className='text-x1 font-bold'> Shopping Cart</h1>
                <p className='text-sm text-gray-400'> There are {cartService.getNumProducts()} items in your cart</p>
                <section className='flex justify-between items-center space-x-10'>
                    <div className='w-[60%] space-y-3'>
                        <table className='w-full'>
                            <thead className='border-b'>
                                <tr>
                                    <td className='text-gray-40 py-2'>Product</td>
                                    <td className='text-gray-40 py-2'>Price</td>
                                    <td className='text-gray-40 py-2'>Quantity</td>
                                    <td className='text-gray-40 py-2'>Total</td>
                                    <td className='text-gray-40 py-2'>Delete</td>
                                </tr>
                            </thead>
                            <tbody className='space-y-10'>
                                {cartProducts.map((cartProduct, index) => {
                                    return <tr key={index} className='border-dashed border-b'>
                                        <td className='py-5'>
                                            <div className='flex items-center space-x-3 py-2'>
                                                <img src={cartProduct.nameOfImage} 
                                                    className='w-20'/>
                                                <div>
                                                    <h1>Sub total</h1>
                                                    <p>${cartService.getTotalProduct(cartProduct.productId)}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>${cartProduct.price}</td>
                                        <td>
                                            <div className='border w-24 p-2'>
                                                <input type="number" 
                                                    className='w-full outline-0'
                                                    value={quantities[index]}
                                                    max={cartProduct.quantity}
                                                    min={0}
                                                    onChange={
                                                        (event) => {
                                                            const newValue = parseInt(event.target.value) || 0;
                                                            if (newValue >= 0 && newValue <= cartProduct.quantity) { // Ensure the value is within the range
                                                                handleChange(index, newValue);
                                                            }else{
                                                                handleChange(index,cartProduct.quantity)
                                                            }
                                                        }
                                                    } />
                                         
                                            </div>  
                                        </td>
                                        <td>${cartService.getTotalProduct(cartProduct.productId)}</td>
                                        <td>
                                            <button onClick={async () => {
                                                await cartService.deleteProduct(cartProduct.productId)
                                                cartProducts = cartService.getCartProducts();
                                                setQuantities(cartProducts.map((product) => product.inCart))
                                                }}>
                                                <AiFillDelete size={"1.5rem"}/>
                                            </button>
                                        </td>
                                    </tr>
                                })}
                                
                            </tbody>
                        </table>
                        <div className='my-5'>
                            <NavLink to='/'>
                            <button className='flex items-center space-x-3 bg-gray-200 font-semibold rounded p-2'>
                                <BsArrowLeft/>
                                <span>Continue Shopping</span>
                            </button>
                            </NavLink>
                        </div>
                    </div>
                    <div className='w-[40%] h-fit border rounded p-5 space-y-5'>
                        <div className='flex justify-between items-center border-b border-dashed p-2'>
                            <h1 className='text-x1'>Sub total</h1>
                            <p>${cartService.getTotal()}</p>
                        </div>
                        <div className='flex justify-between items-center border-b border-dashed p-2'>
                            <h1 className='text-x1'>Discount</h1>
                            <p>$0.00</p>
                        </div>
                        <div className='flex justify-between items-center border-dashed p-2'>
                            <h1 className='text-x1'>Shopping</h1>
                            <p>$20.00</p>
                        </div>
                        <div className='flex justify-between items-center p-2'>
                            <h1 className='text-x1'>Sub total</h1>
                            <p>${cartService.getTotal()+20}</p>
                        </div>
                        

                            {showModal && (
                                <div
                                    id="popup-modal"
                                    tabIndex="-1"
                                    className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-50"
                                >
                                    <div className="relative p-4 w-full max-w-md">
                                        <div className="relative bg-white rounded-lg shadow">
                                            <button
                                                type="button"
                                                className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-10 h-10 flex justify-center items-center"
                                                onClick={closeModal}
                                            >
                                                <ImCancelCircle className='w-6 h-6'/>
                                                <span className="sr-only">Close modal</span>
                                            </button>
                                            <div className="p-4 text-center">
                                                
                                                <FaRegCheckCircle className='mx-auto mb-4  w-12 h-12'/>
                                                <h3 className="mb-5 text-lg font-normal text-gray-500">
                                                    Sale successful! Your product has been sold.
                                                </h3>
                                                <button
                                                    onClick={closeModal}
                                                    type="button"
                                                    className="text-white bg-green-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                                                >
                                                    I want to buy more
                                                </button>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {showLoginFirst && (
                                <div
                                    id="popup-modal"
                                    tabIndex="-1"
                                    className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-50"
                                >
                                    <div className="relative p-4 w-full max-w-md">
                                        <div className="relative bg-white rounded-lg shadow">
                                            <button
                                                type="button"
                                                className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-10 h-10 flex justify-center items-center"
                                                onClick={closeModal}
                                            >
                                                <ImCancelCircle className='w-6 h-6'/>
                                                <span className="sr-only">Close modal</span>
                                            </button>
                                            <div className="p-4 text-center">
                                                
                                                <FcCancel className='mx-auto mb-4  w-12 h-12'/>
                                                <h3 className="mb-5 text-lg font-normal text-gray-500">
                                                    Login first, in order to buy your stuff
                                                </h3>
                                                <button
                                                    onClick={closeModal}
                                                    type="button"
                                                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                                                >
                                                    OKAY
                                                </button>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <button onClick={openModal} className="text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-md">
                                Checkout
                            </button>

                    </div>
                </section>
            </div>

                              

        </div>
    )
}

export default CartItems