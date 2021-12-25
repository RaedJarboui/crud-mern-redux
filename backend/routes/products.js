const Product = require('../models/Product')
var express = require('express');
const asyncHandler = require('express-async-handler');
var router = express.Router();

router.get('/all',asyncHandler(async(req,res)=>{
    const products = await Product.find({});
    res.json(products);

}))
router.get('/:id',asyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id);
    if(product){
        res.json(product);

    }else{
        res.status(404).json({message:'Product not found'});
    }
}))
router.post('/',asyncHandler(async (req, res) => {
      const { name, description, price } = req.body;
      const product = new Product({
        name,
        description,
        price,
       
      });
      await product.save();
      res.json(product);
    })
  );

  router.delete('/:id',asyncHandler(async (req, res) => {
      const product = await Product.findById(req.params.id);
      if(product){
          await product.remove();
          res.json({message:'product removed'});
      }else{
          res.status(404);
          res.json({message:'product not removed'});

      }
    
  }));

  router.patch('/:id',asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    if(product){
        product.name = name
        product.price = price
        product.description = description
        const updatedProduct = await product.save()

        res.json(updatedProduct);
    }else{
        res.status(404);
        res.json({message:'product not removed'});

    }
  
}));

module.exports = router;