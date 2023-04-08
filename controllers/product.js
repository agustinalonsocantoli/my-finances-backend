import product from "../models/product.js";

const productController = {
    getProducts: async (req, res) => {
        try{
            const products = await product.find();

            res.status(200).json(products);

        } catch(err) {
            res.status(404).json({
                message: err.message
            });
        }
    },
}

export default productController;