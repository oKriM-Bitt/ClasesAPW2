// console.log ('funciona')


// module httpr
import fsp from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
// data file para guardar los datos de la API externa
const DATA_FILE = path.join('.', 'apic.json');

const app = http.createServer(async (peticion, respuesta) => {
    const { method, url } = peticion;

    //  RUTA: /usuarios

    if (method === 'GET' && url === '/usuarios') {
        try {
            // Fetch a la API externa y convertir a texto
            const respuestaFetch = await fetch('https://api.escuelajs.co/api/v1/users');
            const datosText = await respuestaFetch.text();

            // Guardar en apic.json con el writeFile de fs/promises
            await fsp.writeFile(DATA_FILE, datosText);

            // Leer el archivo y enviarlo al cliente con el readFile de fs/promises
            const datosGuardados = await fsp.readFile(DATA_FILE, 'utf-8');

            respuesta.statusCode = 200;
            respuesta.setHeader('Content-Type', 'application/json; charset=utf-8');
            return respuesta.end(datosGuardados);

        } catch (error) {
            console.error(error);
            respuesta.statusCode = 500;
              respuesta.end(':V error 500 ');
        }

    //  /usuarios/filtrados
    // 
    // && ahorra codigo con esto en vez de hacer dos if separados
    // es como el operador lógico OR pero para comparar strings
    } else if (method === 'GET' && url === '/usuarios/filtrados') {
        try {
            // Leer el archivo apic.json, convertirlo a objeto y filtrar los usuarios con id < 10
            const datosGuardados = await fsp.readFile(DATA_FILE, 'utf-8');

            const usuarios = JSON.parse(datosGuardados);
            // Filtrar usuarios con id < 10
            const usuariosFiltrados = usuarios.filter(usuario => usuario.id < 10);

            respuesta.statusCode = 200;
            respuesta.setHeader('Content-Type', 'application/json; charset=utf-8');
            return respuesta.end(JSON.stringify(usuariosFiltrados));

        } catch (error) {
            console.error(error);
            respuesta.statusCode = 500;
            return respuesta.end(':V error 500 ');
        }

    //  CUALQUIER OTRA RUTA (El famoso 404)
    } else {
        respuesta.statusCode = 404;
        respuesta.setHeader('Content-Type', 'text/plain; charset=utf-8');
        respuesta.end(':V error 404 ');
    }
});





app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});








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
