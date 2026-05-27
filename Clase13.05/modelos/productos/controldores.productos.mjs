// CONTROLADOR -> Capa que vincula (por ahora) el MODELO con la respuesta al cliente

import * as modelo from './modelo.productos.mjs'
// modelo es un espacio de nombres

export function obtenerTodos(req, res){
    const datosProductos = modelo.obtenerTodos()
    res.json(datosProductos)
}

export function obtenerUno(req, res){
    const idProducto = Number(req.params.id)
    const datosProductos = modelo.obtenerUno(idProducto)

    // si hay o no productos y responder en consecuencia
    if(datosProductos.length > 0){
        res.json(datosProductos)
    }else{
        res.status(404).json({mensaje: `Producto con id ${idProducto} no encontrado`})
    }
}