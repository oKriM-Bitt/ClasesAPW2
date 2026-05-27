// CONTROLADOR -> Capa que vincula (por ahora) el MODELO con la respuesta al cliente
import * as vista from './vista.productos.mjs'
import * as modelo from './modelo.productos.mjs'
// modelo es un espacio de nombres

export async function obtenerTodos(req, res){
    const datosProductos = await modelo.obtenerTodos()
    const Rvista = vista.obtenerTodos(datosProductos)
    res.json(Rvista)
}

export async function obtenerUno(req, res){
    const idProducto = Number(req.params.id)
    const datosProductos = await modelo.obtenerUno(idProducto)
    const resultado = vista.obtenerUno(datosProductos)

    // si hay o no productos y responder en consecuencia
    if(resultado.length > 0){
        res.json(resultado)
    }else{
        res.status(404).json({mensaje: `Producto con id ${idProducto} no encontrado`})
    }
}

export async function borrarUno(req, res){
    const idProducto = Number(req.params.id)
    const datosProductos = await modelo.borrarUno(idProducto)
    const resultado = vista.borrarUno(datosProductos)

    // si hay o no productos y responder en consecuencia
    if(resultado.length > 0){
        res.json(resultado)
    }else{
        res.status(404).json({mensaje: `Producto con id ${idProducto} no encontrado`})
    }
}