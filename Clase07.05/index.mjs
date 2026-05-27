import express from 'express'
import { obtenerProductos, obtenerProductosID, eliminarProducto, altaProducto, modificarProducto} from './funciones.mjs'

const puerto = 3000



const app = express()
app.use(express.json())
//configuracion  de una api rest

//GET
app.get('/api/v1/productos', obtenerProductos)

//GET
app.get('/api/v1/productos/:id', obtenerProductosID )

//POST damos de alta un registro
app.post('/api/v1/productos', altaProducto)
//PUT modificar un registro usando id

app.put('/api/v1/productos/:id', modificarProducto)
//DELETE elimina un registro usando id
app.delete('/api/v1/productos/:id', eliminarProducto)


app.listen(puerto)