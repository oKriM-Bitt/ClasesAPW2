import fsp from 'node:fs/promises'

export async function leerUsuarios() {
    try {
        const contenido = await fsp.readFile('./apic.json', 'utf-8')
        return JSON.parse(contenido)
    } catch (e) {
        console.log("Error al leer:", e)
    }
}