import express from 'express'

import * as controlador from './modelos/productos/controldores.productos.mjs'
const puerto = 3000



const app = express()



//GET
app.get('/api/v1/productos', controlador.obtenerTodos)

app.get('/api/v1/productos/:id', controlador.obtenerUno)


app.listen(puerto)