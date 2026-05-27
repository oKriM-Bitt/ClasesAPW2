
import express from 'express'
import * as controlador from './controldores.productos.mjs'




const rutasP = new express.Router


rutasP.get('/api/v1/productos', controlador.obtenerTodos)

rutasP.get('/api/v1/productos/:id', controlador.obtenerUno)
rutasP.delete('/api/v1/productos/:id', controlador.borrarUno)

export default rutasP