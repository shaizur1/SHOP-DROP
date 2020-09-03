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

// Update product by ID - POST or PUT
productRoute.route('/update/:id').post((req, res) => {
    let id = req.params.id;
    product.findById(id, (err, updateByID) => {
      if(!updateByID) {
        console.log(err);
        return new Error('Could not load document!');
      }
      else {
        updateByID.name = req.body.name;
        updateByID.company = req.body.company;
        updateByID.description = req.body.description;
        updateByID.price = req.body.price;
        updateByID.image = req.body.image;
        updateByID.save().then(prod => {
          console.log(prod);
          res.json('Update Successfully!');
        }).catch(err => {
          console.log(err);
          res.status(400).send('Unable to update!');
          });
      }
    });
  });

  // Edit product by ID
  productRoute.route('/edit/:id').get((req, res) => {
    let id = req.params.id;
    product.findById(id, (err, editByID) => {
      if(err) return next(err);
      res.json(editByID);
    });
  });
  
  // Delete product
  productRoute.route('/delete/:id').get((req, res) => {
    // Delete based on id from database
    product.findByIdAndDelete({_id:req.params.id}, (err) => {
      if(err) res.json(editByID);
      else res.json('Deleted product successfully!');
    });
  });
  
module.exports = productRoute;
  