//

try{


const pepe = await fetch('https://69cbcb780b417a19e07b42c1.mockapi.io/api/v1/Productos')
//extraemo el responce
const productos = await pepe.json() // <--- transforma y lo muestra como una base de dato
console.log(productos)
}catch(e)
{
    console.log(e)
}