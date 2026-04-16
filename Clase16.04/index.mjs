// console.log ('funciona')


// module httpr
import fsp from 'node:fs/promises'
import http from 'node:http'
import path from 'node:path'

const app = http.createServer(async (peticion, respuesta) => {
    if (peticion.method === 'GET') {

        if (peticion.url === '/usuarios') {

            try {
                const pepe = await fetch('https://api.escuelajs.co/api/v1/users')
                const productos = await pepe.text()
                // no necesito filtrar
                // const productosFiltrados = productos.map(u => ({ id: u.id, name: u.name, email: u.email }))
                respuesta.statusCode = 200
                const ruta = path.join('./apic.json')
                await fsp.writeFile(ruta, productos)
                       




                respuesta.setHeader('content-type', 'application/json')

                console.log("Escritura completada")

                respuesta.end("Escritura completada")



            } catch (e) {
                console.log(e)

                respuesta.statusCode = 500
                respuesta.end('Error en el sv')
            }

        }
    }


    respuesta.statusCode = 404
    respuesta.end(':V')
  
})


app.listen(3000, () => {

    console.log('servidor corriendo en http://localhost:3000')
})








//se va a ejecutar cuando se complete
//  la funcion cuando haya una peticion
/*
const app = http.createServer(async(peticion, respuesta)=> {
    //console.log(peticion.url)
 if(peticion.url === '/')
 {
    respuesta.statusCode = 200
   return  respuesta.end('Estas parado en la rai')
 }
 

 if (peticion.url === '/suma')
 {
    
    respuesta.statusCode = 200
    const resultado = (5+5).toString
    return respuesta.end(resultado)
 }


 if(peticion.method === 'POST')
 {
    /* 
    if(peticion.url === '/proceso-form' )
    {
        //
       // respuesta.on('')
        return respuesta.end('se hizo una peticion con verbo post')


    }
    
 if (peticion.url === '/guardara')
 {
   const respuestaApi = await fetch('https://api.escuelajs.co/api/v1/users') 
   const datosApi = await respuestaApi.text()
   try {
    
   await fsp.writeFile(path.join('./datosapi.txt'))
   respuesta.statusCode = 201
   return respuesta.end('se guardaron')
   } catch (error) {
      respuesta.statusCode = 500
   }

 }




 }


 respuesta.statusCode = 404
    respuesta.end(':V')

})




app.listen(3000, ()=>{

    console.log('servidor corriendo en http://localhost:3000')

}) 

*/
