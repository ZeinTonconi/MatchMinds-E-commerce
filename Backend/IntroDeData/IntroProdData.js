const Product = require('../models/Product');

const productsToInsert = [
  { productId: 12345, description: 'Television', name: 'Television', nameOfImage: 'https://es.m.wikipedia.org/wiki/Archivo:LG_smart_TV.jpg', price: 7520, quantity: 500},
  { productId: 19515, description: 'Samsung Galaxy S24', name: 'Celular', nameOfImage: 'https://www.muycomputer.com/wp-content/uploads/2023/04/El-Galaxy-S24-seria-casi-calcado-a-los-Galaxy-S23.jpg', price: 8500, quantity: 500},
  { productId: 48718, description: 'Laptop', name: 'Laptop', nameOfImage: 'https://media.wired.com/photos/592714be7034dc5f91bed946/master/w_1600,c_limit/HP-Spectre-13.3_right-facing-paired-with-wireless-mouse.jpg', price: 5885, quantity: 500},
  { productId: 95958, description: 'Mouse Pad', name: 'Mouse Pad', nameOfImage: 'https://www.thermaltake.com/media/catalog/product/cache/cc8b24283b13da6bc2ff91682c03b54b/l/2/l20mousepad01.jpg', price: 45, quantity: 500},
  { productId: 84859, description: 'Smart Watch', name: 'Reloj', nameOfImage: 'https://m.media-amazon.com/images/I/41jJtitW+KL._SY300_SX300_.jpg', price: 1500, quantity: 500},
];

const insertProducts = async () => {
    try {
      const newProducts = await Promise.all(productsToInsert.map(product => Product.create(product)));
      console.log('Productos creados:', newProducts);
    } catch (error) {
      console.error('Error al crear productos:', error);
    }
  };
  
module.exports=insertProducts;
