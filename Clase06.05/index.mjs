import express from 'express'
import { EliminarobtenerProductoPorId, obtenerProductoPorId, ObtProductos } from './funciones.mjs'
const PUERTO = 3000

const app = express()



// configuracion de una API REST

// get 1º 

app.get('/api/v1/productos', ObtProductos)
                





// get 2ª

app.get('/api/v1/productos:id',obtenerProductoPorId )


// POST
app.post()



//PUT 

// DELETE
app.delete('/api/v1/productos:id',EliminarobtenerProductoPorId)



app.listen(PUERTO)