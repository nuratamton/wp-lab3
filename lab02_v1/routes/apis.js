const express = require('express');
const productController = require('../controllers/productController');
const catalogServices = require('../services/productServices');
const clientController = require('../controllers/clientController');
const { response } = require('express');

//define a router and create routes
const router = express.Router();

//routes for dynamic processing of products
//-----------------------------------------------
//route for listing all products
router.get('/api/catalog', productController.getCatalogue);
//router.get('/api/article/:id', productController.getProductByID);
router.get('/api/article/:id', (request, response) => {
    catalogServices.searchIDService(request.params.id, function(err, rows) {
        response.render('article', { product: rows });

    });
});

//routes for dynamic processing of clients 
//route for registration
router.post('/api/register', clientController.registerControl); 
//route for login
router.post('/api/login', clientController.loginControl);
//route for client
router.get('/api/login/:username', clientController.getClient);

router.get('/api/clients', clientController.getClient);




//export router
module.exports = router;