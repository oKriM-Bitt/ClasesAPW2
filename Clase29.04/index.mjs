import express from 'express'
import path from 'node:path'


const PUERTO = 3000
const APP = express()


//Middlewares



// levantemos una web estatica 
APP.use( express.static(path.resolve('Front')))


APP.listen(PUERTO, ()=> {

    console.log(`http://localost:${PUERTO}`)
})