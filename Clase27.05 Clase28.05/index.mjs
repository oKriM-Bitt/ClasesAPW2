import express from 'express'
import './iniciar.env.mjs'
import rutasProductos from './modulos/productos/rutas.productos.mjs'


console.log(process)

const PUERTO = 3000



const app = express()
app.use(rutasProductos)
app.use(express.json())
app.listen(PUERTO)
