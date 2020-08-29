// CRUD Code

// Using Express framework for http REST calls
const express = require('express');

// For using HTTP.GET, POST, PUT, DELETE in route
const productRoute = express.Router();

// Add the Product model
let Product = require('../models/product');

///////////Define the routes///////////

// Get list of Products
productRoute.route('/').get((req, res) => {
    Product.find((err, prod) => {
        if(err) {console.log(err)}
        else {res.json(prod)}
    });
});

// Get Product by ID
productRoute.route('/get/:id').get((req, res) => {
    let id = req.params.id;
    Product.findById(id, (err, myGetByID) => {
        if(err) return next(err);
        res.json(myGetByID);
    });
});

// Add Product
productRoute.route('/add').post((req, res) => {
    // Request to POST new object
    let product = new Product(req.body);
    product.save().then(prod => {
      console.log(prod);
      res.status(200).json({'Products': 'Product added successfully!'})
    }).catch(err => {
        console.log(err);
        res.status(400).send('Unable to add product!');
      });
  });
  
module.exports = productRoute;
  