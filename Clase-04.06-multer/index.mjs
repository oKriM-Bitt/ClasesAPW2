import express from 'express'
import cookieParser from 'cookie-parser'

const Puerto = 3000

const App = express()


App.use(cookieParser())



App.use(express.json())



App.use(express.ulrencoded({extended:true}))



App.use('/admin', chequearCookie,express.static('./fronts/front-admin'))


// Admin
function chequearCookie(req, res, next){
    // Verifico si la cookie existe
    const sesionId = req.signedCookies['sesionId']
    // Verifico si el valor enviado por el cliente coincide con lo que tenemos en el servidor
    if(sesionId === 'minumerodesesion'){
       return next()
    }
    return res.redirect('/login')
}


App.use('/login', express.static('./fronts/front-login'))

App.listen(Puerto)

//rutas

App.post('./autentication', (req, res) => {
const {usuario, clave} = req.body
if(usuario != 'admin' || clave != '4321')
{
    return res.redirect('/login')

}



res.cookie('sesionId', 'minumerodesesion',{
signedCookies: true,
httpOnly: true,
sameSite: 'lax',
secure: true 

})

res.send('logeao e mentira pero ta logeao creo e mentira')

})