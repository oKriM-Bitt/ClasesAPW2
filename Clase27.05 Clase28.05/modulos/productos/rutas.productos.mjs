import { Router } from "express";
import * as controlador from './controlador.productos.mjs'


const rutasProductos = new Router()

rutasProductos.get('/api/v1/productos', controlador.obtenerTODOS)



export default rutasProductos
















