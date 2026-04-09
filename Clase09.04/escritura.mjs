import fsp from 'node:fs/promises'
import path from 'node:path'


export async function guardarUsuarios() {
    try {
        const pepe = await fetch('https://api.escuelajs.co/api/v1/users')
        const productos = await pepe.json()
        const productosFiltrados = productos.map(u => ({ id: u.id, name: u.name, email: u.email }))
        
        const ruta = path.join('./apic.json')
        await fsp.writeFile(ruta, JSON.stringify(productosFiltrados, null, 4))
        console.log("Escritura completada")
    } catch (e) {
        console.log(e)
    }
}