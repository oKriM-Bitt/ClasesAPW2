//Console.log("hola node")

//vamos a leer un archivo txt
import fsp from 'node:fs/promises'

try
{
const contenido =  await fsp.readFile('./Prueba.txt', 'utf8')
console.log(contenido)



}catch(e){
console.log(e)

}