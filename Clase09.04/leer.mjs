try{




const pepe = await fetch('https://api.escuelajs.co/api/v1/users')
//extraemo el responce
const productos = await pepe.json()
const productosFiltrados = productos.map(usuario => {
        return {
            id: usuario.id,
            name: usuario.name,
            email: usuario.email
        }
    }) // <--- transforma y lo muestra como una base de dato
console.log(productosFiltrados )
}catch(e)
{
    console.log(e)
}