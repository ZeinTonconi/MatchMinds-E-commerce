

const getAllProducts = (req, res) => {
    res.status(200).json({
        mgs: "Todos los productos"
    })
}

module.exports = {
    getAllProducts
}