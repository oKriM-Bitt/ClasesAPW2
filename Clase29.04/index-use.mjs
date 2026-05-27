import express from 'express'

const PUERTO = 3000
const APP = express()


// Middlewares

function MID(req, res, next)
{
    console.log('Middleware 1')
    next()

}
APP.use(MID)


APP.get('/',(req, res)=>{
    console.log('ejecucion de callback final')
    res.send('hola')
})


APP.get('/saludo', (req, res)=>{
    console.log('ejecucion de callback final con saludo')
    res.send('hola ruta /saludo')
})



APP.listen(PUERTO, ()=> {

    console.log(`http://localost:${PUERTO}`)
})