import fsp from 'node:fs/promises'
import path from 'node:path'
import { guardarUsuarios } from './escritura.mjs'
import { leerUsuarios } from './leer.mjs'
 async function principal() {
    console.log("Iniciando ")
    
    await guardarUsuarios()
    
    const lista = await leerUsuarios()
    console.log("Datos recuperados:", lista)
}

console.log(principal)