const Product = require('../models/ProductsModel')
const mongoose = require('mongoose')

// get all workouts
const getProducts = async (req, res) => {
  const products = await Product.find({}).sort({createdAt: -1})

  res.status(200).json(products)
}

// get a single workout
const getProduct = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such product'})
  }

  const product = await Product.findById(id)

  if (!product) {
    return res.status(404).json({error: 'No such product'})
  }

  res.status(200).json(product)
}

// create a new workout
const createProduct = async (req, res) => {
  const {title, price, quantity} = req.body

  let emptyFields = []

  if(!title) {
    emptyFields.push('title')
  }
  if(!price) {
    emptyFields.push('price')
  }
  if(!quantity) {
    emptyFields.push('quantity')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields'})
  }

  // add to the database
  try {
    const product = await Product.create({ title, price, quantity })
    res.status(200).json(product)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a workout
const deleteProduct = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such workout'})
  }

  const product = await Product.findOneAndDelete({_id: id})

  if(!product) {
    return res.status(400).json({error: 'No such workout'})
  }

  res.status(200).json(workout)
}

// update a workout
const updateProduct = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such workout'})
  }

  const product = await Product.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!product) {
    return res.status(400).json({error: 'No such workout'})
  }

  res.status(200).json(workout)
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct
}