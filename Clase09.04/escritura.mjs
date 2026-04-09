import fsp from 'node:fs/promises'
import path from 'node:path'
try{


const pepe = await fetch('https://api.escuelajs.co/api/v1/users')
//extraemo el responce
const productos = await pepe.json() // <--- transforma y lo muestra como una base de dato

const productosF = productos.map(usuario => {
        return {
            id: usuario.id,
            name: usuario.name,
            email: usuario.email
        }
    })
//creamos lpa ruta

const ruta = path.join('./apic.json')
//const ruta = path.join('./api.txt')
//guardar datos en el archivo
//lo traduce
const contenido = JSON.stringify(productosF, null, 4)
await fsp.writeFile(ruta, contenido)







}catch(e)
{
    console.log(e)
}

