//
import fsp from 'node:fs/promises'
import path from 'node:path'
try{


const pepe = await fetch('https://69cbcb780b417a19e07b42c1.mockapi.io/api/v1/Productos')
//extraemo el responce
const productos = await pepe.json() // <--- transforma y lo muestra como una base de dato


//creamos lpa ruta

const ruta = path.join('./api.json')
//const ruta = path.join('./api.txt')
//guardar datos en el archivo
//lo traduce
const contenido = JSON.stringify(productos, null, 4)
await fsp.writeFile(ruta, contenido)







}catch(e)
{
    console.log(e)
}