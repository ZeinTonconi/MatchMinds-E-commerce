import React, { useState } from 'react';
import { CiSearch, CiShoppingCart } from 'react-icons/ci';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import watch from '../assets/watch.jpg'
import laptop from '../assets/watch.jpg'
import keyboard from '../assets/watch.jpg'
import sunGlass from '../assets/watch.jpg'
import leatherWatch from '../assets/watch.jpg'
import mouse from '../assets/watch.jpg'
import monitor from '../assets/watch.jpg'
import Login from './Login'


const Main = () => {
    let Products = [
        {
            img:sunGlass,
            title:'Sun Glasses',
            description: 'lorem impsum dolar',
            price:40,
            path: '../Description',
        },
        {
            img:sunGlass,
            title:'lol',
            description: 'lorem impsum dolar',
            price:40,
            path: '/product/sun-glasses',
        },
        {
            img:sunGlass,
            title:'Sun Glasses',
            description: 'lorem impsum dolar',
            price:40,
            path: '/product/sun-glasses',
        },
        {
            img:sunGlass,
            title:'Sun Glasses',
            description: 'lorem impsum dolar',
            price:40,
            path: '/product/sun-glasses',
        },
        {
            img:sunGlass,
            title:'Sun Glasses',
            description: 'lorem impsum dolar',
            price:40,
            path: '/product/sun-glasses',
        },
        {
            img:sunGlass,
            title:'Sun Glasses',
            description: 'lorem impsum dolar',
            price:40,
            path: '/product/sun-glasses',
        },
        {
            img:sunGlass,
            title:'Sun Glasses',
            description: 'lorem impsum dolar',
            price:40,
            path: '/product/sun-glasses',
        },
        {
            img:sunGlass,
            title:'Sun Glasses',
            description: 'lorem impsum dolar',
            price:40,
            path: '/product/sun-glasses',
        },
        {
            img:sunGlass,
            title:'Sun Glasses',
            description: 'lorem impsum dolar',
            price:40,
            path: '/product/sun-glasses',
        },
        {
            img:sunGlass,
            title:'Sun Glasses',
            description: 'lorem impsum dolar',
            price:40,
            path: '/product/sun-glasses',
        },
        
    ]

    const [filteredProducts, setFilteredProducts]=useState(Products)
    const searchHandler = (e) => {
        const filteredArray = Products.filter((product)=> product.title.toLocaleLowerCase().includes(e.target.value))
        if(filteredArray.length != 0){
            setFilteredProducts(filteredArray)
        }
    }
    /**INTERACTIVE */
    const navigate = useNavigate(); // Use useNavigate from react-router-dom

    const handleAddToCart = (product) => {
    // Implement logic to add product to cart (optional for this example)
    console.log('Product added to cart:', product);

    // Optionally, redirect to the cart page after adding the product
    // navigate('/cart'); // Assuming you have a cart page
    };
    const handleProductDetails = (product) => {
        navigate(`/product/${product.title}`, { state: product }); // Pass product as state
    };


    return(
        <div className='w-full relative'>
            <div className='sticky top-0 z-10'>

                <div className='header flex justify-between items-center p-4 bg-white'>
                    <h1 className='text-3x1 font-bold'> MatchMinds </h1>
                    <div className='search flex justify-between items-center px-5 py-2 bg-gray-100 rounded mx-auto max-w-4xl'>
                        <input type='text' placeholder='Search product' className='bg-transparent outline-0 mx-auto max-w-4xl'
                        onChange={searchHandler}/>
                        <button onClick={()=>searchHandler}><CiSearch/></button>
                    </div>
                    <div className='flex justify-end'>
                        <Login/>
                    </div>
                </div>

                <div className='categories bg-white w-full flex justify-between space-x-8 px-2 py-10'>
                    <div className='bg-black text-white px-5 py-2 rounded-full drop-shadow-xl'>
                        <p> Watches </p>
                    </div>
                    <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl'>
                        <p> Watches </p>
                    </div>
                    <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl'>
                        <p> Watches </p>
                    </div>
                    <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl'>
                        <p> Watches </p>
                    </div>
                    <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl'>
                        <p> Watches </p>
                    </div>
                    <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl'>
                        <p> Watches </p>
                    </div>
                    <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl'>
                        <p> Watches </p>
                    </div>

                </div>
            </div>
            <div className='products grid grid-cols-2 xl:grid-cols-3 gap-9 p-4 z-20'>
                {filteredProducts && filteredProducts.map((product,idx)=>{
                    return(
                        <div key={idx} className='product h-[300px] bg-white drop-shadow-2x1 p-2 border'>
                        <img src={product.img} alt="" className='w-full h-[60%] object-cover p-2'/>
                        <div className='m-2 bg-gray-100 p-2'>
                            
                            <Link to= {`/product/${product.title}`} onClick={() => handleProductDetails(product)}>
                            <h1 className='text-xl font-semibold'>{product.title}</h1>
                            </Link>
                            <p className='text-sm'>{product.description}</p>
                            <div className='flex justify-betweem items-center'>
                                <p className='text-xl font-bold'>{product.price}.00</p>
                                <Link to='/cart' onClick={() => handleAddToCart(product)}>
                                <CiShoppingCart size={'1.4rem'}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    )
                })}

            </div>
        </div>

    )
}

export default Main