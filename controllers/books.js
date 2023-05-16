//dependencies
const express = require('express')
const books = express.Router()
const Book = require('../models/books.js')


//index route
books.get('/', (req, res) => {
    Book.find()
        .then(foundBooks => {
            res.status(200).json(foundBooks)
        })
        .catch(err => {
            res.status(400).json({
                message: 'No book found'
            })
        })
})

//show route
books.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(foundBook => {
            res.status(200).json(foundBook)
        })
        .catch(err => {
            res.status(400).json({
                message: 'No book found'
            })
        })
})

//update route
books.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(updatedBook => {
            console.log(req.body)
            res.status(200).json(updatedBook)
        })
        .catch(err => {
            res.status(400).json({
                message: 'Could not update the book'
            })
        })
})

//delete route
books.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id)
        .then(deletedBook => {
            res.status(200).json({
                message: 'Delete successful'
            })
        })
        .catch(err => {
            res.status(400).json({
                message: 'Could not delete the book'
            })
        })
})

//create route
books.post('/', (req, res) => {
    Book.create(req.body)
        .then(createdBook => {
            res.status(200).json(createdBook)
        })
        .catch(err => {
            res.status(400).json({
                message: 'Could not create the book'
            })
        })
})



//export router
module.exports = router