import express from 'express'
import rutasP from './modulos/productos/rutas.productos.mjs'
//  import * as controlador from './modelos/productos/controldores.productos.mjs'
const puerto = 3000



const app = express()

app.use(rutasP)





app.listen(puerto)