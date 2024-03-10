import React, { useEffect, useState } from 'react';
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
import { useCart } from '../App';


async function getAllProducts(){
    try {
        const response = await fetch('http://localhost:8080/api/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data.products)
        return data.products;
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        // Handle errors appropriately
      }
}

const Main =  () => {

    const [Products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
             setProducts(await getAllProducts())
          } catch (error) {
            setError(error);
          } finally {
            setLoading(false);
          }
        };
        fetchData();
      }, []);

    const {cartService, setCartService} = useCart();

    const [showMessage, setShowMessage] = useState(false);


    const [filteredProducts, setFilteredProducts]=useState(Products)
    const searchHandler = (e) => {
        const filteredArray = Products.filter((product)=> product.name.toLocaleLowerCase().includes(e.target.value))
        if(filteredArray.length != 0){
            setFilteredProducts(filteredArray)
        }
    }
    /**INTERACTIVE */
    const navigate = useNavigate(); // Use useNavigate from react-router-dom

    const handleAddToCart = async (product) => {

        await cartService.addProduct(product)

        setShowMessage(true)
        setTimeout(() => {
            setShowMessage(false)
        }, 2000)


    };
    const handleProductDetails = (product) => {
        navigate(`/product/${product.title}`, { state: product }); // Pass product as state
    };
    if (loading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    console.log({Products, filteredProducts})
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
                        <img src={product.nameOfImage} alt="" className='w-full h-[60%] object-cover p-2'/>
                        <div className='m-2 bg-gray-100 p-2'>
                            
                            <Link to= {`/product/${product.name}`} onClick={() => handleProductDetails(product)}>
                            <h1 className='text-xl font-semibold'>{product.name}</h1>
                            </Link>
                            <p className='text-sm'>{product.description}</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <p className='text-xl font-bold'>{product.price}.00</p>
                                </div>
                                <div className='pr-5'>
                                    <Link onClick={() => handleAddToCart(product)}>
                                        <CiShoppingCart size={'2rem'}/>
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    )
                })}

            </div>
            {showMessage && (
                 <div className="bg-green-500 text-white py-3 px-6 rounded-lg fixed bottom-0 right-0 mb-4 mr-4 z-50 transition-opacity duration-1000">
                    Item added to cart!
                </div>
            )}
        </div>

    )
}

export default Main