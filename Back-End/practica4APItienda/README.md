**Show products by ID**
----
 ``This EndPoint makes a call to take out each product by its product id``

* **URL**

   ``product/:id``

* **Method:**

   `GET` 

*  **URL Params**

   ``product/5``

   **Required:**
 
    ` id= [number] `

* **Data Params**

     ``None``

* **Success Response:**

* **Code:** 200 <br />
  **Content:** `{"productID": 5,"productName": " camisa de cuadros para mujer","cantidad": 13,"price": "20"}`

* **Error Response:**

  * **Code:** 4058 UNPROCESSABLE ENTRY <br />
    **Content:** `{"errno": -4058,"code": "ENOENT","syscall": "open","path": "C:\\Users\\crist\\Desktop\\BootCamp\\WorkSpace\\BackEnd\\practica4APItienda\\productdos.json"}`

* **Sample Call:**


```javascript
server.get('/product/:id', (req, res) => {
    console.log("He recibido una llamada Get  /");
    fs.readFile('productos.json', (error, data) => {

            let id = parseInt(req.params.id)
            let productos1 = JSON.parse(data)
            for (let i = 0; i < productos1.length; i++) {  
            if (productos1[i]["productID"] === id) {
              res.send(productos1[id])
            }
        }
    })
})
  ```

* **Notes:**

``It is strictly necessary to indicate the id of the object you want to access``

<br>
<br>

---

<br>


**Show products**
----
 ``This EndPoint will take you out all the API products``

* **URL**

   ``/products``

* **Method:**

   `GET` 

*  **URL Params**

   ``products``

   **Required:**
 
    

* **Data Params**

     ``None``

* **Success Response:**

* **Code:** 200 <br />
  **Content:** `{"productID": 5,"productName": " camisa de cuadros para mujer","cantidad": 13,"price": "20"},.........more products`

* **Error Response:**

  * **Code:** 4058 UNPROCESSABLE ENTRY <br />
    **Content:** `{"errno": -4058,"code": "ENOENT","syscall": "open","path": "C:\\Users\\crist\\Desktop\\BootCamp\\WorkSpace\\BackEnd\\practica4APItienda\\productdos.json"}`

* **Sample Call:**


```javascript
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
  ```

* **Notes:**

<br>
<br>

---

<br>


**Add products**
----
 ``Add products to the array of objects``

* **URL**

   ``/product``

* **Method:**

   `POST` 

*  **URL Params**

   ``product``

   **Required:** <br>
``A body with objects is required ``
* **Data Params**
    <br>
`` An object with these keys is required`` <br>
    ``{"productID":5"productName":"camisadecuadrosparamujer""cantida}``

* **Success Response:**

* **Code:** 200 <br />
  **Content:** `{"productID": 5,"productName": " camisa de cuadros para mujer","cantidad": 13,"price": "20"},.........Example`

* **Error Response:**

  * **Code:** 4058 UNPROCESSABLE ENTRY <br />
    **Content:** `{"errno": -4058,"code": "ENOENT","syscall": "open","path": "C:\\Users\\crist\\Desktop\\BootCamp\\WorkSpace\\BackEnd\\practica4APItienda\\productdos.json"}`

* **Sample Call:**


```javascript
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
  ```

* **Notes:**
`` It is necessary to pass an object with the necessary keys as in the example``

<br>
<br>

---

<br>


**Modify product**
----
 ``Modify products to the array of objects``

* **URL**

   ``/product``

* **Method:**

   `PUT` 

*  **URL Params**

   ``product``

   **Required:** <br>
``A body with objects is required ``
* **Data Params**
    <br>
`` An object with these keys is required`` <br>
    ``{"productID":5"productName":"camisadecuadrosparamujer""cantida}``

* **Success Response:**

* **Code:** 200 <br />
  **Content:** `{"productID": 5,"productName": " camisa de cuadros para mujer","cantidad": 13,"price": "20"},.........Example`

* **Error Response:**

  * **Code:** 4058 UNPROCESSABLE ENTRY <br />
    **Content:** `{"errno": -4058,"code": "ENOENT","syscall": "open","path": "C:\\Users\\crist\\Desktop\\BootCamp\\WorkSpace\\BackEnd\\practica4APItienda\\productdos.json"}`

* **Sample Call:**


```javascript
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
  ```

* **Notes:**
`` It is necessary to pass an object with the necessary keys as in the example``

<br>
<br>

---

<br>


**Delete products**
----
 ``Delete products to the array of objects``

* **URL**

   ``/product/:id``

* **Method:**

   `DELETE` 

*  **URL Params**

   ``product``

   **Required:** <br>
``A body with objects is required ``
* **Data Params**
    <br>
`` An object with these keys is required`` <br>
    ``{"productID":5"productName":"camisadecuadrosparamujer""cantida}``

* **Success Response:**

* **Code:** 200 <br />
  **Content:** `{"productID": 5,"productName": " camisa de cuadros para mujer","cantidad": 13,"price": "20"},.........Example`

* **Error Response:**

  * **Code:** 4058 UNPROCESSABLE ENTRY <br />
    **Content:** `{"errno": -4058,"code": "ENOENT","syscall": "open","path": "C:\\Users\\crist\\Desktop\\BootCamp\\WorkSpace\\BackEnd\\practica4APItienda\\productdos.json"}`

* **Sample Call:**


```javascript
server.delete('/product/:id', (req, res) => {
    console.log("He recibido una llamada Delete");

    fs.readFile('productos.json', (error, data) => {

        let id = parseInt(req.params.id)
        let productos1 = JSON.parse(data)

        for (let i = 0; i < productos1.length; i++) {
        
        if (productos1[i]["productID"] === id) {

            productos1.splice(i,1)
            
            fs.writeFile("productos.json", JSON.stringify(productos1),
                () => {})
        }
    }
    })
res.send("Producto Eliminado")
})
  ```

* **Notes:**
`` It is necessary to pass an object with the necessary keys as in the example``