const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api/product', ProductController.getAllProducts);
    app.post('/api/product/create', ProductController.createProduct);
    app.get('/api/product/:id', ProductController.getProduct);
    app.put('/api/product/:id', ProductController.updateProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);
}
