import * as modelo from './modelo.productos.mjs'

export async function obtenerTODOS (req, res){
    //Arreglo
    const productos = await modelo.obtenerTODOS()
if(productos.length === 0)
{
    return res.status(404).json({mensaje:'Registros no encontados'})
}
//  Respuesta al cliente
res.json(productos)


}

export async function crearUNO(req, res)
{
    const datosproductos = req.body
    const productos = await modelo.crearUNO(datosproductos)
    if(productos.length === 0){
        return res.status(400).json({mensaje:'no'
        })
    }
    res.json(productos)
}