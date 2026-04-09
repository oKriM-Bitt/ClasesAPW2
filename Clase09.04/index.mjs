import fsp from 'node:fs/promises'
import path from 'node:path'
import { guardarUsuarios } from './escritura.mjs'
import { leerUsuarios } from './leer.mjs'
 async function principal() {
    console.log("Iniciando ")
    
    // 1. Llamamos a la función de escritura
    await guardarUsuarios()
    
    // 2. Llamamos a la función de lectura para verificar
    const lista = await leerUsuarios()
    console.log("Datos recuperados:", lista)
}

console.log(principal)