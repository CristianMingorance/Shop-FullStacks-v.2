const express = require('express')
const process = require('process')
const fs = require('fs')
var cors = require('cors')
var bodyParser = require('body-parser')

let port = process.argv[2]
const server = express()

server.use(bodyParser.json())
server.use(cors())



server.get('/categories', (req, res) => {
    console.log("He recibido una llamada Get  /");
    fs.readFile('categories.json', (error, data) => {

        if (error) {
            res.send(error)
        } else {
            res.send(JSON.parse(data))
        }

    })
})

server.get('/products', (req, res) => {
    console.log("He recibido una llamada Get  /");
    fs.readFile('productos.json', (error, data) => {

        if (error) {
            res.send(error)
        } else {
            res.send(JSON.parse(data))
        }

    })
})

server.get('/products/:categoryId', (req, res) => {
    console.log("He recibido una llamada Get  /");

    fs.readFile('productos.json', (error, data) => {
        let idCategory = req.params.categoryId
        let productos = JSON.parse(data)

        console.log(idCategory)

        /*
        let productosFiltrados = [];
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].categoryId === idCategory) {

                productosFiltrados.push(productos[i])

            }
        }
*/

        //Forma recorrer un array y comprobar 
        var productosFiltrados = productos.filter(function (producto) {

            return producto.categoryId == idCategory;

        });



        /*
        let id = parseInt(req.params.id)
        let productos1 = JSON.parse(data)
        for (let i = 0; i < productos1.length; i++) {
            if (productos1[i]["productID"] === id) {
                res.send(productos1[id])
            }
        }
*/

        res.send(productosFiltrados)
    })
})

server.post('/product', (req, res) => {

    if (parseInt(req.body.productID) > 0 && req.body.productName != undefined) {

        res.send("Datos incorrectos")
    }
    console.log("He recibido una llamada Get al endpoint /");
    fs.readFile('productos.json', (error, data) => {
        console.log(req["body"])
        let productos1 = JSON.parse(data)
        let productoExiste = false;
        for (let i = 0; i < productos1.length; i++) {
            if (productos1[i]["productID"] === req["body"]["productID"]) {
                // res.send(JSON.parse(data))
                productoExiste = true;
            }
        }
        if (!productoExiste) {
            productos1.push(req["body"])
            console.log(productos1)
            fs.writeFile("productos.json", JSON.stringify(productos1),
                () => {
                    console.log("Archivo escrito!!")
                })
        }
    })
    res.send("Producto añadido")
})


//Sirve para moficiar contenido existente
server.put('/product', (req, res) => {

    console.log("He recibido una llamada Get al endpoint /");
    fs.readFile('productos.json', (error, data) => {

        let productos1 = JSON.parse(data)
        let id = parseInt(req.body.productID)
        for (let i = 0; i < productos1.length; i++) {

            if (productos1[i]["productID"] === id) {
                productos1[i] = req["body"]
                console.log(productos1)
                fs.writeFile("productos.json", JSON.stringify(productos1),
                    () => {})
            }
        }
    })
    res.send("Producto añadido")
})


server.delete('/product/:id', (req, res) => {
    console.log("He recibido una llamada Delete");

    fs.readFile('productos.json', (error, data) => {

        let id = parseInt(req.params.id)
        let productos1 = JSON.parse(data)

        for (let i = 0; i < productos1.length; i++) {

            if (productos1[i]["productID"] === id) {

                productos1.splice(i, 1)

                fs.writeFile("productos.json", JSON.stringify(productos1),
                    () => {})
            }
        }
    })
    res.send("Producto Eliminado")
})

server.listen(port, () => {
    console.log("Escuchando en puerto " + port)
})