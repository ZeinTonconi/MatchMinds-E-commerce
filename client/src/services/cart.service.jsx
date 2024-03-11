
export class CartService {

    constructor(){
        this.products = JSON.parse(localStorage.getItem('cart')) ?? [];
     }

    setUpdateCart(cartUpdate){
        this.cartUpdate = cartUpdate
    }

    async addProduct(product){
   
        let cartProduct = this.getCartProduct(product.productId)
        if(!cartProduct){
            cartProduct = {...product}
            cartProduct.inCart = 0
            this.products.push(cartProduct)
        }

        if(product.quantity <= cartProduct.inCart){
            throw new Error("Come back later")
        }
        else{
            cartProduct.inCart++;
        }

        localStorage.setItem('cart', JSON.stringify(this.products))
        this.updateCart()
    }

    deleteProduct(id){
        this.products = this.products.filter(cartProduct => cartProduct.productId !== id)
        localStorage.setItem('cart', JSON.stringify(this.products))
        this.updateCart()
    }

    takeAwayOneProduct(id){
        const cartProduct = this.getCartProduct(id)
        cartProduct.inCart--;

        if(cartProduct.inCart==0)
            this.deleteProduct(id)
        
            localStorage.setItem('cart', JSON.stringify(this.products))
        this.updateCart()
    }

    updateCart(){
        const cart = new CartService()
        cart.products = this.products
        this.cartUpdate(cart)
    }

    getCartProducts(){  
        return this.products;
    }
    getCartProduct(id){
        return this.products.find((cartProduct) => {
            return cartProduct.productId === id
        })
    }

    getNumProducts(){
        return this.products.reduce((acc, prod) => acc+prod.inCart, 0)
    }

    getTotalProduct(id){
        const prod = this.getCartProduct(id)
        return prod.inCart * prod.price
    }
    getTotal(){
        return this.products.reduce((acc, prod) => acc+this.getTotalProduct(prod.productId),0)
    }

    updateProduct(product){
        console.log(product)
        this.products.forEach((prod,index) => {
            if(prod.productId === product.productId)
                this.products[index] = product
        });
        localStorage.setItem('cart', JSON.stringify(this.products))
        this.updateCart();
    }


    async buyCart(user){

        this.products.forEach(async (product) => {
            const data = {
                userId: user.id,
                productId: product.productId,
                quantity: product.inCart
            }
            const response = await fetch('http://localhost:8080/api/cart/agregar', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data) 
            })
        })
        
    }
}

export default CartService