const express = require('express')

const router = express.Router()

// Get all blogPosts
router.get('/', (req, res) => {
	res.json({msg: 'Get all Posts'})
})

//Get a single blogpost
router.get('/:id', (req, res) => {
	res.json({msg: 'GET a single post'})
})

//POST a new blogpost
router.post('/', (req, res) => {
	res.json({msg: 'POST a new blogpost'})
})

//DELETE a blogpost
router.delete('/:id', (req, res) => {
        res.json({msg: 'DELETE a blogpost'})
})

//UPDATE a blogpost
router.patch('/:id', (req, res) => {
        res.json({msg: 'UPDATE a blogpost'})
})


module.exports = router
