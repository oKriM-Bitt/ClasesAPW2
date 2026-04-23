import express from 'express'

const PUERTO = 3000
//abrir un puerton
    const Product =
        [{
            id: 1,
            nombre: "Camiseta",
            precio: 20000
        },
        {
            id: 2,
            nombre: "Pantalon",
            precio: 30000
        }
    
        ]
        

// instancia express
const APP = express()

//avisar a expreess si hay datos del cliente en el formato .json
APP.use(express.json())

const PETICIONGET = (req, res) => {

    res.set('content-type', 'text/html') //-> Cabecera 


    res.status(200) // -> codigo de estado 
    res.end('<h1>Holaa con get 1</h1>') // -> cuerpo o contenido

}
const BUSQUEDA = (req, res) => {
        const id = parseInt.req.params.id
        console.log(id)
       const ArrF = Product.filter((Prod)=>{
            return Prod.id === id
        })

        
        res.json(ArrF)
    
}

const PRODUCTOS = (req, res) => {

        res.json(P)
      //  res.set('content-type', 'application/json')
        //res.end(JSON.stringify(P))
}


const POST = (req, res) => {

     //agrega al objeto req o peticion una propiedad llamada "body"

     const Pro = req.body
        Product.push(Pro)

     res.status(201).json({mensaje:'Producto Creado'})

}
APP.get('/Producto/:id', BUSQUEDA)
APP.post('/Productos', POST)

APP.get('/Productos', PRODUCTOS)

APP.get('/', PETICIONGET)

APP.listen(PUERTO, () => {
    console.log(`Servidor Corriendo en http://localhost:${PUERTO}`)
})

