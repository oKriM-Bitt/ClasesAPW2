// MODELO -> capa conexion a datos
import pool from '../../conexion.mjs'

export async function obtenerTodos(){
    /* Haria una consulta a una BD */
    const resultado = await pool.query('select * from productos')
    console.log(resultado)
    // Tener un criterio de datos a pasar entre capas
    return resultado.rows
}

export async function obtenerUno(id)
{
    const resultado = await pool.query('Select * from productos where id=$1', [id])
    return resultado.rows
}  

export async function borrarUno(id){
    const resultado = await pool.query('delete from productos where id=$1 RETURNING id, producto, precio', [id])
    return resultado.rows
    }