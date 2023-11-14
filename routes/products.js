var express = require('express');
var router = express.Router();
const Validator = require('fastest-validator')
const {Product} = require('../models')
const v = new Validator()

//router get
router.get('/', async(req,res)=>{
  const products = await Product.findAll()
  return res.json(products)
})


//router get by id
router.get('/:id', async(req,res)=>{
  const id = req.params.id
  const product = await Product.findByPk(id)
  return res.json(product || {})
})

// router post
router.post('/', async function(req, res,) {
  const schema = {
    name: 'string',
    brand: 'string',
    description: 'string|optional'
  }
  
  const validate = v.validate(req.body, schema)

  if(validate.length){
    return res.status(400).json(validate)
  }

  const product = await Product.create(req.body)

  res.status(200).json(product)
});

// router put
router.put('/:id', async(req,res)=>{
  const id = req.params.id

  let product = await Product.findByPk(id)
  if(!product){
    return res.json({message: "product not found"})
  }

  const schema = {
    name: 'string|optional',
    brand: 'string|optional',
    description: 'string|optional'
  }
  
  const validate = v.validate(req.body, schema)

  if(validate.length){
    return res.status(400).json(validate)
  }

  product = await product.update(req.body)

  res.status(200).json(product)
})

//router delete
router.delete('/:id', async(req,res)=>{
  const id = req.params.id

  const product = await Product.findByPk(id)
  if(!product){
    return res.json({message:"product not found"})
  }

  await product.destroy()

  res.json({
    message:"product is deleted"
  })
})
module.exports = router;
