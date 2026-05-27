import express from 'express'
import path from 'node:path'
const PUERTO = 3000

const app = express()



 async function codigo(req, res, next) {
    try {
        const codigoEnviado = Number(req.params.codigo);
        const respuesta = await fetch('http://localhost:4321/usuario')
        const codigos = await respuesta.json()
      const ExisteU = codigos.codigo;

   if (ExisteU === codigoEnviado) {
            console.log('usuario existe -> pasa');
            return next(); 
        } else {
            console.log('usuario NO existe -> NO pasa');
           
            return res.status(400).send("El código es incorrecto" );
        }
    } catch (error) {
        console.log('Hubo un error en el fetch:', error);
        return res.status(500).send('Error interno');
    }
}






/*consultaApi()
function MID(req, res, next) {
    console.log('Middleware 1')
    const ExisteU = codigo
    if (ExisteU) {
        console.log('usuario existe -> pasa')
        return next()

    }
    console.log('usuario NO existe -> NO pasa')
    res.status(403).send('Usuario no registrado')





}
*/
app.get('/:codigo', codigo, (req, res) => {
   
    res.status(200).send("El código es correcto");
});

app.listen(PUERTO);