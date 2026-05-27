import productos from "./productos.mjs"

export function obtenerProductos(req, res){
    res.json(productos.datos)
}

//GET
export function obtenerProductosID(req, res){
    const idProducto = Number(req.params.id)

    const productosFiltrados = productos.datos.filter((producto)=>{
            return idProducto === Number(producto.id) //es verdadero o falso, pasa o no pasa
    })

    if(productosFiltrados.length > 0){
        res.json(productosFiltrados)
    }else{
        const respuesta = {
            mensaje: 'Producto no encontrado'
        }
        res.status(404).json(respuesta)
    }
    
}

//POST
export function altaProducto(req, res){
   const nuevoProducto = req.body //cuerpo, siempre verificar la estructura que viene del cliente
   const proximoId = Number(productos.ultimo_id) + 1

   //agregar propiedad id 
   nuevoProducto.id = proximoId

   //Actualiza la referencia
   productos.ultimo_id = proximoId
   
   productos.datos.push(nuevoProducto)
      const respuesta = {
            mensaje: 'Producto dado de alta'
        }
        res.json(respuesta)
}

//PUT
export function modificarProducto(req, res) {

    const idProducto = Number(req.params.id)
    const productoModificar = req.body

    productos.datos.forEach((producto, indice)=>{
        //obtiene el indice con indexOf
       // const indice = productos.datos.indexOf(producto)

        if(idProducto === Number(producto.id))
        {
            productoModificar.id = idProducto
            productos.datos[indice] = productoModificar
        }
    })

     const respuesta = {
            mensaje: 'Producto modificado con id' + idProducto
        }
        res.json(respuesta)

}

//DELETE
export function eliminarProducto(req, res){
    const idProducto = Number(req.params.id)

    const productosFiltrados = productos.datos.filter((producto)=>{
            return idProducto !== Number(producto.id) //es verdadero o falso, pasa o no pasa
    })

    productos.datos.length = 0 
    productos.datos.push(productosFiltrados)

    const respuesta = {
            mensaje: 'Producto eliminado'
        }
    res.json(respuesta)
}