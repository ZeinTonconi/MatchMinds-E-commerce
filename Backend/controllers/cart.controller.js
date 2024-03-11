const { User, Product, Cart } = require('../models/index.models');

const addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    // Verificar si el usuario y el producto existen
    const user = await User.findByPk(userId);
    let product = await Product.findByPk(productId)

    // if (!user /*|| !product*/) {
    //   return res.status(404).json({ mensaje: 'Usuario o producto no encontrado.' });
    // }
    console.log({product, hasValue:(!product)})
    // Agregar el producto al carrito del usuario
    await user.addProduct(product, { through: { quantity } });
    
    res.json({ mensaje: 'Producto agregado al carrito correctamente.' });
  } catch (error) {
    console.error('Error al agregar producto al carrito:', error);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
};

const getCartContents = async (req, res) => {
  try {
    const { userId } = req.query;

    // Verificar si el usuario existe
    const user = await User.findByPk(userId, {
      include: [{
        model: Product,
        through: { attributes: ['quantity'] }, // Incluir la cantidad del producto en el carrito
      }],
    });

    if (!user) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado.' });
    }

    res.json({ carrito: user.Products });
  } catch (error) {
    console.error('Error al obtener contenido del carrito:', error);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
};

module.exports = {
  addToCart,
  getCartContents,
};