import pool from './../../bd/conexion.bd.mjs'


export async function obtenerTODOS(){

    const resultado = await pool.query('SELECT *  FROM productos')

    return respuesta.rows

}


export async function crearUno() {
    const { producto, descripcion, precio, categoria, imagen} = datos
    const resultado = await pool.query(`
        insert into productos (producto, descripcion, precio, categoria, imagen) VALUES
        ($1, $2, $3, $4, $5)
        returning id,producto, descripcion, precio, categoria, imagen`,
        [
            producto,
            descripcion,
            precio, 
            categoria,
            imagen
        ])
}