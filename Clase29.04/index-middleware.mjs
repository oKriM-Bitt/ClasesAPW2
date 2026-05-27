import express from 'express'

const PUERTO = 3000
const APP = express()


// Middlewares

function MID(req, res, next)
{
    console.log('Middleware 1')
    const ExisteU = false
    if(ExisteU)
    {
        console.log('usuario existe -> pasa')
        return next()

    }
    console.log('usuario NO existe -> NO pasa')
    res.status(403).send('Usuario no registrado')
    




}
function MID2(req, res, next)
{
    console.log('Middleware 2')
    next()
    


}

APP.get('/',MID, (req, res)=>{
    console.log('ejecucion de callback final')
    res.send('hola')
})



APP.listen(PUERTO, ()=> {

    console.log(`http://localost:${PUERTO}`)
})