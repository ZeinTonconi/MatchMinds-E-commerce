const { Product } = require('../models/index.models');

const getAllProducts = async (req, res) => {
  try {
    // Obtener todos los productos de la base de datos
    const productos = await Product.findAll();

    // Enviar la lista de productos como respuesta
    res.json({ productos });
  } catch (error) {
    console.error('Error al obtener todos los productos:', error);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
};

module.exports = {
  getAllProducts
};



// const getAllProducts = (req, res) => {
//     // Hacer la peticion de obtener todos los productos
    
// }

// module.exports = {
//     getAllProducts
// }