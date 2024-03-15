require('dotenv').config()

const express = require('express')
const postsRoutes = require('./routes/posts')

const app = express()

//middleware
app.use(express.json())

//middleware
app.use((req, res, next) => {
	console.log(req.path, req.method)
	next()
})

//routes
app.use('/api/posts', postsRoutes)


//listen for requests
app.listen(process.env.PORT, () => {
	console.log('Listening on port', process.env.PORT)
})
