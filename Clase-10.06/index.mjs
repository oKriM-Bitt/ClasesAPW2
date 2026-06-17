import express from 'express';
import pool from './conexion.bd.mjs';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcryptjs';


const PUERTO = 3000;

////////////////

////////////////
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser()) // <-- necesario para leer las cookies



app.use('/admin', express.static('./fronts/front-admin'))



app.use('/login',express.static('./fronts/front-login'))



// Registrar
app.post('/registrar', async(req, res) => {
    // 1 - Capturamos los datos
    ///req.body //<-- tanto json y urlencoded se guardan aqui
    console.log(req.body)
    const { usuario, pass } = req.body

    // 2 - Control
    if (!usuario || !pass) {
        return res.status(400).json({
            mensaje: 'Datos incompletos'
        })
    }

    // 3 - Guardamos datos en la BD
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(pass, salt);



    const resultado = await pool.query(`
    INSERT INTO usuarios
        (username, password_hash)
    VALUES
        ($1, $2)
        RETURNING
        id, username
    `, //<--- ojo con la coma
    [
        usuario,
        hash
    ]
)
 if (resultado.rowCount > 0) {
    return res.json({
        mensaje: `El usuario ${usuario} se ha registrdo con éxito`
    })
}
res.json({
    mensaje: 'Registro'
})

})


app.post('/autenticacion', async (req, res) => {



    if(usuario != 'admin' || clave != '123')
    {
        return res.redirect('/login')


    }
    res.cookie('sesionId', '',{
        signed: true,
        httpOnly: true,
        sameSite: 'lax',
        secure: true,
        maxAge: 1000 * 20
    })
})

app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});
