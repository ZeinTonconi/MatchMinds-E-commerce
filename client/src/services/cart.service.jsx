
export class CartService {

    constructor(){
        this.products = JSON.parse(localStorage.getItem('cart')) ?? [];
        console.log(this.products)
    }

    setUpdateCart(cartUpdate){
        this.cartUpdate = cartUpdate
    }

    async addProduct(product){
        // if(product.quantity <= 0){
        //     throw new Error("Come back later")
        // }


        this.products.push(product)
        // TODO
        localStorage.setItem('cart', JSON.stringify(this.products))
        const cart = new CartService()
        cart.products = this.products
        this.cartUpdate(cart)
    }

    deleteProduct(id){
        this.products.splice(id,1)
        localStorage.setItem('cart', JSON.stringify(this.products))
        const cart = new CartService()
        cart.products = this.products
        this.cartUpdate(cart)
    }

    getCartProducts(){  
        return this.products;
    }




}

export default CartService