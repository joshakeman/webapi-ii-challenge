const express = require ('express')

const postsRouter = require('./data/db-router')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.send(`
        <h2>Users API</h2>   
    `)
})

module.exports = server