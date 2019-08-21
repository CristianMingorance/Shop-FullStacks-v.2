import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  categories = [];
  products = []
  cesta = []

  constructor(public http: HttpClient) {}

  getCategories() {

    this.http.get("http://localhost:3000/categories")
      .subscribe(data => {
        this.categories = data["categories"];
        // console.log(this.categories)
      });
  }


  getProducts(idUrl) {

    this.http.get("http://localhost:3000/products/" + idUrl )
      .subscribe(data => {
 console.log(data)
        this.products = data["products"];
        console.log(this.products)
      })
  }

  addProd(producto) {

    this.cesta.push(producto)
console.log(this.cesta)
  }



}
