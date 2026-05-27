// MODELO -> capa conexion a datos
import productos from "../../productos.mjs";

export function obtenerTodos(){
    /* Haria una consulta a una BD */
    // Tener un criterio de datos a pasar entre capas
    return productos.datos
}

export function obtenerUno(id)
{
    /* Filtrar por ID */
    const productosFiltrados = productos.datos.filter((producto)=>{
        return Number(producto.id) === id
    })
    // Tener un criterio de datos a pasar entre capas
    return productosFiltrados
}