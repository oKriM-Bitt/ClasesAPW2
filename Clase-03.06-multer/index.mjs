import express from 'express'
import multer from 'multer'
import {nanoid} from 'nanoid'
import mime from 'mime-type'
 


const Puerto = 3000

const App = express()

// Ejecutamos multer()
const almacenamiento = multer.diskStorage({
    //
  destination: function (req, file, cb) {
//diagnosticos
    cb(null, '/archivos')
  },
  // -----
  filename: function (req, file, cb) {
    const extension = mime.extension(file.mimetype)
    const nombreImagen = nanoid()    + '.' + extension
    cb (null, nombreImagen)
  }
})


const  subirArchivo = multer({storage: almacenamiento})
    


const getionArchivos = subirArchivo.single('imagen')


App.use('./admin', express.static('./front-admin'));


App.post('./subir-archivo', (req,res)=>{
    gestionArchivos(req,res,(error) => {  
    if(error) return res.status(500).json       ({mensaje: 'error wachin'})   })   
   
   console.log(req.file)
   
   res.json({mensaje:'se subio wachin'})
})

App.listen(Puerto)

